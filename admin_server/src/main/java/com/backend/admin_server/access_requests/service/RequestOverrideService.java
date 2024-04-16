package com.backend.admin_server.access_requests.service;

import com.backend.admin_server.access_requests.dto.AccessRequestDTO;
import com.backend.admin_server.access_requests.enums.RequestStateEnums;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.repository.AccessRequestRepository;
import com.backend.admin_server.access_requests.utils.AccessRequestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Calendar;
import java.util.Date;

@Service
public class RequestOverrideService {

    private final AccessRequestRepository accessRequestRepository;
    private static final Logger logger = LoggerFactory.getLogger(RequestOverrideService.class);


    public RequestOverrideService(AccessRequestRepository accessRequestRepository) {
        this.accessRequestRepository = accessRequestRepository;
    }

    public AccessRequestModel updateRequestState(String requestId, String date, AccessRequestDTO accessRequestDTO) {
        logger.info("Starting override request");
        AccessRequestModel accessRequestModel = accessRequestRepository.findByRequestId(requestId, date);

        accessRequestModel.setApprovalStatus(accessRequestDTO.getApprovalStatus());
        accessRequestModel.setState(accessRequestDTO.getState());

        switch (accessRequestModel.getState()) {
            case MANUAL_OVERRIDE_REQUESTED:
                logger.info("State is MANUAL_OVERRIDE_REQUESTED");
                initializeTtl(accessRequestModel);
                break;
            case MANUAL_OVERRIDE_ACTIONED:
                logger.info("State is MANUAL_OVERRIDE_ACTIONED, checking if TTL is valid");
                if (accessRequestModel.getTtl() == null || ! AccessRequestUtils.isTtlValid(accessRequestModel.getTtl())) {
                    logger.warn("TTL check failed for requestId: {}, TTL: {}", requestId, accessRequestModel.getTtl());
                    accessRequestModel.setState(RequestStateEnums.MANUAL_OVERRIDE_TIMEOUT);
                    logger.info("State set to TIMEOUT due to expired TTL");
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request has expired.");
                }
                break;
        }

        accessRequestRepository.save(accessRequestModel);
        logger.info("Saved updated for request");
        return accessRequestModel;
    }

    private void initializeTtl(AccessRequestModel model) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.SECOND, 120);
        model.setTtl(cal.getTime());
        logger.info("TTL initialized");
        logger.info("TTL set to: {}", model.getTtl());
    }
}
