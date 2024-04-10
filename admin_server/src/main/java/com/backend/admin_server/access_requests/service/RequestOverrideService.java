package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class RequestOverrideService {

    private final AccessRequestRepository accessRequestRepository;

    public RequestOverrideService(AccessRequestRepository accessRequestRepository) {
        this.accessRequestRepository = accessRequestRepository;
    }

    public AccessRequestModel updateRequestState(String requestId, AccessRequestDTO accessRequestDTO) {
        AccessRequestModel accessRequestModel = accessRequestRepository.findByRequestId(requestId);

        accessRequestModel.setApprovalStatus(accessRequestDTO.getApprovalStatus());
        accessRequestModel.setState(accessRequestDTO.getState());
        accessRequestRepository.save(accessRequestModel);

        return accessRequestModel;
    }
}
