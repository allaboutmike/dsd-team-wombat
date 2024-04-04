package com.backend.admin_server.access_requests.controller;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.service.AccessRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AccessRequestController {

    private final AccessRequestService accessRequestService;

    public AccessRequestController(AccessRequestService accessRequestService) {
        this.accessRequestService = accessRequestService;
    }

    @PostMapping("/access_request")
    public ResponseEntity<Boolean> verifyImage(@RequestBody AccessRequestDTO requestDTO) {
        boolean isVerified = accessRequestService.processAccessRequest(requestDTO);
        return ResponseEntity.ok(isVerified);
    }
}
