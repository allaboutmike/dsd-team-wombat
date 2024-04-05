package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import com.backend.admin_server.user_data.model.UserModel;
import com.backend.admin_server.user_data.repository.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AccessRequestValidationService {
    private final RestTemplate restTemplate;
    private final AccessRequestRepository accessRequestRepository;
    private final String externalApiUrl;
    private final UserRepository userRepository;
    private static final Logger LOGGER = Logger.getLogger(AccessRequestValidationService.class.getName());


    @Autowired
    public AccessRequestValidationService(RestTemplate restTemplate,
                                          AccessRequestRepository accessRequestRepository,
                                          @Value("${external.api.url}") String externalApiUrl,
                                          UserRepository userRepository) {
        this.restTemplate = restTemplate;
        this.accessRequestRepository = accessRequestRepository;
        this.externalApiUrl = externalApiUrl;
        this.userRepository = userRepository;
    }

    public boolean processAccessRequest(AccessRequestDTO requestDTO) {
        try {
            LOGGER.info("Processing access request for user: " + requestDTO.getUserId());

            String userBase64Image = retrieveUserImage(requestDTO.getUserId());
            LOGGER.info("Retrieved user image for verification");

            if (userBase64Image != null && requestDTO.getBase64Image() != null) {
                LOGGER.info("Sending for external verification");
                boolean verificationResult = sendForExternalVerification(requestDTO.getBase64Image(), userBase64Image);

                String status = mapVerificationResultToStatus(verificationResult);
                LOGGER.info("Mapped verification result to status: " + status);

                AccessRequestModel model = createRequestModel(requestDTO, status);
                accessRequestRepository.save(model);
                LOGGER.info("Access request model saved");

                return verificationResult;
            } else {
                LOGGER.warning("User image or request image is null");
                return false;
            }
        } catch (Exception e) {
            LOGGER.severe("Exception in processing access request: " + e.getMessage());
            return false;
        }
    }

    private String retrieveUserImage(Integer userId) {
        UserModel user = userRepository.findByUserId(userId);
        LOGGER.info("Retrieved image for user ID " + userId + ": " + (user != null ? "Image found" : "No image found"));
        return user != null ? user.getUserImage() : null;
    }

    private AccessRequestModel createRequestModel(AccessRequestDTO dto, String status) {
        AccessRequestModel model = new AccessRequestModel();
        model.setUserId(dto.getUserId());
        model.setBase64Image(dto.getBase64Image());

        String dateString = ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT);
        model.setDate(dateString);

        model.setApprovalStatus(status);
        return model;
    }

    private boolean sendForExternalVerification(String clientBase64Image, String userBase64Image) {
        try {
            LOGGER.info("Client Base64 Image: " + (clientBase64Image != null ? "Present" : "Null"));
            LOGGER.info("User Base64 Image: " + (userBase64Image != null ? "Present" : "Null"));
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            String cleanedClientImage = cleanBase64Image(clientBase64Image);

            String jsonBody = String.format("{\"captured\": \"%s\", \"reference\": \"%s\"}",
                    cleanedClientImage, userBase64Image);
//            LOGGER.info("JSON Payload being sent: " + jsonBody);

            HttpEntity<String> request = new HttpEntity<>(jsonBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(externalApiUrl, request, String.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                String responseBody = response.getBody();
                if (responseBody != null) {
                    ObjectMapper mapper = new ObjectMapper();
                    JsonNode root = mapper.readTree(responseBody);
                    JsonNode data = root.get("data");
                    if (data != null) {
                        return data.get("verified").asBoolean();
                    }
                }
            }
            return false;
        } catch (Exception e) {
            LOGGER.severe("Exception while sending request for external verification: " + e.getMessage());
            return false;
        }
    }

    private String cleanBase64Image(String base64Image) {
        if (base64Image != null) {
            int startIndex = base64Image.indexOf("/9j/");
            if (startIndex != -1) {
                return base64Image.substring(startIndex);
            }
        }
        return base64Image;
    }

    private String mapVerificationResultToStatus(boolean result) {
        return result ? "Approved" : "Denied";
    }
}

