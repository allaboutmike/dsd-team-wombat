package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class AccessRequestService {
    private final AccessRequestRepository accessRequestRepository;

    public AccessRequestService(AccessRequestRepository accessRequestRepository) {
        this.accessRequestRepository = accessRequestRepository;
    }

    public void processAccessRequest(AccessRequestDTO accessRequestDTO) {

        AccessRequestModel accessRequestModel = new AccessRequestModel();
        accessRequestModel.setBase64Image(accessRequestDTO.getBase64Image());
        accessRequestModel.setBadgeID(accessRequestDTO.getBadgeID());

        accessRequestRepository.save(accessRequestModel);
    }
}
