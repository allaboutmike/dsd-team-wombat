package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class RequestOverrideService {

    private final AccessRequestRepository accessRequestRepository;

    public RequestOverrideService(AccessRequestRepository accessRequestRepository) {
        this.accessRequestRepository = accessRequestRepository;
    }

    public AccessRequestModel updateRequestState(String requestId, String date, AccessRequestDTO accessRequestDTO) {
        AccessRequestModel accessRequestModel = accessRequestRepository.findByRequestId(requestId, date);

        accessRequestModel.setApprovalStatus(accessRequestDTO.getApprovalStatus());
        accessRequestModel.setState(accessRequestDTO.getState());

        switch (accessRequestModel.getState()) {
            case MANUAL_OVERRIDE_REQUESTED:
                accessRequestModel.initializeTtl();
                break;
            case MANUAL_OVERRIDE_ACTIONED:
                if (accessRequestModel.getTtl() == null || !accessRequestModel.isTtlValid()) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request has expired.");
                }
                break;
        }

        accessRequestRepository.save(accessRequestModel);
        return accessRequestModel;
    }
}
