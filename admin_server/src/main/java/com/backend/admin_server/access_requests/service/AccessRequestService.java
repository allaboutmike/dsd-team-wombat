package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import java.util.logging.Logger;

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

import java.util.Date;

@Service
public class AccessRequestService {
    private final RestTemplate restTemplate;
    private final AccessRequestRepository accessRequestRepository;
    private final String externalApiUrl;
    private static final Logger LOGGER = Logger.getLogger(AccessRequestService.class.getName());


    @Autowired
    public AccessRequestService(RestTemplate restTemplate,
                                AccessRequestRepository accessRequestRepository,
                                @Value("${external.api.url}") String externalApiUrl) {
        this.restTemplate = restTemplate;
        this.accessRequestRepository = accessRequestRepository;
        this.externalApiUrl = externalApiUrl;
    }

//    public boolean processAccessRequest(AccessRequestDTO requestDTO) {
//        try {
//            String userBase64Image = retrieveUserImage(requestDTO.getUserId());
//
//            if (userBase64Image != null && requestDTO.getBase64Image() != null) {
//                boolean verificationResult = sendForExternalVerification(requestDTO.getBase64Image(), userBase64Image);
//                String status = mapVerificationResultToStatus(verificationResult);
//
//                AccessRequestModel model = createRequestModel(requestDTO, status);
//                accessRequestRepository.save(model);
//
//                return verificationResult;
//            } else {
//                return false;
//            }
//        } catch (Exception e) {
//            return false;
//        }
//    }

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
        AccessRequestModel userRequest = accessRequestRepository.findByUserId(userId);
        return userRequest != null ? userRequest.getBase64Image() : null;
    }

    private AccessRequestModel createRequestModel(AccessRequestDTO dto, String status) {
        AccessRequestModel model = new AccessRequestModel();
        model.setUserId(dto.getUserId());
        model.setBase64Image(dto.getBase64Image());
        model.setDate(new Date());
        model.setApprovalStatus(status);
        return model;
    }

    private boolean sendForExternalVerification(String clientBase64Image, String userBase64Image) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            String jsonBody = String.format("{\"clientImage\": \"%s\", \"userImage\": \"%s\"}",
                    clientBase64Image, userBase64Image);

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

    private String mapVerificationResultToStatus(boolean result) {
        return result ? "Approved" : "Denied";
    }
}

