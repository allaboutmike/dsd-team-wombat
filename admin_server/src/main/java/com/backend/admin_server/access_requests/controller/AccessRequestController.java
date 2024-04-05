package com.backend.admin_server.access_requests.controller;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.service.AccessRequestService;
import com.backend.admin_server.access_requests.service.AccessRequestValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/access_request")
public class AccessRequestController {

    private final AccessRequestValidationService accessRequestValidationService;
    private final AccessRequestService accessRequestService;

    @Autowired
    public AccessRequestController(AccessRequestValidationService accessRequestValidationService, AccessRequestService accessRequestService) {
        this.accessRequestValidationService = accessRequestValidationService;
        this.accessRequestService = accessRequestService;
    }

    @PostMapping
    public ResponseEntity<Boolean> verifyImage(@RequestBody AccessRequestDTO requestDTO) {
        boolean isVerified = accessRequestValidationService.processAccessRequest(requestDTO);
        return ResponseEntity.ok(isVerified);
    }

    @GetMapping
    public List<AccessRequestModel> getAllAccessRequests() {
        return accessRequestService.getAllSortedByDate();
    }
}
