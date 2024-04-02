package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
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

    @Autowired
    public AccessRequestService(RestTemplate restTemplate,
                                AccessRequestRepository accessRequestRepository,
                                @Value("${external.api.url}") String externalApiUrl) {
        this.restTemplate = restTemplate;
        this.accessRequestRepository = accessRequestRepository;
        this.externalApiUrl = externalApiUrl;
    }

    public boolean processAccessRequest(AccessRequestDTO requestDTO) {
        try {
            AccessRequestModel model = createRequestModel(requestDTO);
            boolean verificationResult = sendForExternalVerification(requestDTO.getBase64Image());

            String status = mapVerificationResultToStatus(verificationResult);
            model.setApprovalStatus(status);
            accessRequestRepository.save(model);
            return verificationResult;
        } catch (Exception e) {
            return false;
        }
    }

    private AccessRequestModel createRequestModel(AccessRequestDTO dto) {
        AccessRequestModel model = new AccessRequestModel();
        model.setUserId(dto.getUserId());
        model.setBase64Image(dto.getBase64Image());
        model.setDate(new Date());
        model.setApprovalStatus("Pending");
        return model;
    }

    private boolean sendForExternalVerification(String base64Image) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> request = new HttpEntity<>(base64Image, headers);

            ResponseEntity<Boolean> response = restTemplate.postForEntity(externalApiUrl, request, Boolean.class);
            return response.getBody() != null && response.getBody();
        } catch (Exception e) {
            return false;
        }
    }

    private String mapVerificationResultToStatus(boolean result) {
        return result ? "Approved" : "Denied";
    }
}

