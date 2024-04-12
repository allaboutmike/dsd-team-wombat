package com.backend.admin_server.access_requests.controller;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.service.AccessRequestService;
import com.backend.admin_server.access_requests.service.AccessRequestValidationService;
import com.backend.admin_server.access_requests.service.RequestOverrideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/access_request")
public class AccessRequestController {

    private final AccessRequestValidationService accessRequestValidationService;
    private final AccessRequestService accessRequestService;
    private final RequestOverrideService requestOverrideService;

    @Autowired
    public AccessRequestController(AccessRequestValidationService accessRequestValidationService, AccessRequestService accessRequestService, RequestOverrideService requestOverrideService) {
        this.accessRequestValidationService = accessRequestValidationService;
        this.accessRequestService = accessRequestService;
        this.requestOverrideService = requestOverrideService;
    }

    @PostMapping
    public ResponseEntity<AccessRequestDTO> createAccessRequest(@RequestBody AccessRequestDTO requestDTO) {
        AccessRequestDTO responseDTO = accessRequestValidationService.processAccessRequest(requestDTO);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping
    public List<AccessRequestModel> getAllAccessRequests() {
        return accessRequestService.getAllSortedByDate();
    }

    @GetMapping("/{requestDate}/{requestId}")
    public ResponseEntity<AccessRequestModel> getRequestStatus(@PathVariable String requestDate, @PathVariable String requestId) {
        AccessRequestModel response = accessRequestService.get(requestDate, requestId);
                return ResponseEntity.ok(response);
    }

    @PutMapping("/{requestId}")
    public ResponseEntity<AccessRequestModel> initiateRequestOverride(@PathVariable String requestId,
                                                                      @RequestBody AccessRequestDTO accessRequestDTO) {
        AccessRequestModel updatedRequest = requestOverrideService.updateRequestState(accessRequestDTO.getDate(), requestId, accessRequestDTO);
        return ResponseEntity.ok(updatedRequest);
    }

}
