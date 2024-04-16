package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.enums.RequestStateEnums;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import com.backend.admin_server.access_requests.utils.AccessRequestUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AccessRequestService {

    private final AccessRequestRepository accessRequestRepository;

    public AccessRequestService(AccessRequestRepository accessRequestRepository) {
        this.accessRequestRepository = accessRequestRepository;
    }

    public List<AccessRequestModel> getAllSortedByDate() {
        List<AccessRequestModel> requests = new ArrayList<>(accessRequestRepository.findAll());
        requests.sort((r1, r2) -> r2.getDate().compareTo(r1.getDate()));

        // If any of the request's state is MANUAL_OVERRIDE_REQUESTED and if that
        // request's TTL is expired, update its state to MANUAL_OVERRIDE_TIMEOUT
        requests.forEach(request -> {

            RequestStateEnums state = request.getState();
            Date ttl = request.getTtl();

            if (state.equals(RequestStateEnums.MANUAL_OVERRIDE_REQUESTED)) {
                if (!AccessRequestUtils.isTtlValid(ttl)) {
                    request.setState(RequestStateEnums.MANUAL_OVERRIDE_TIMEOUT);
                }
            }

        });

        return requests;
    }

    public AccessRequestModel get(String requestDate, String requestId) {
        return accessRequestRepository.findByRequestId(requestDate, requestId);
    }
}
