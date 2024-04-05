package com.backend.admin_server.access_requests.controller;

import com.backend.admin_server.access_requests.model.AccessRequestModel;
import com.backend.admin_server.access_requests.service.AccessRequestLogService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/access_request_logs")
public class AccessRequestLogController {

    private final AccessRequestLogService accessRequestLogService;

    public AccessRequestLogController(AccessRequestLogService accessRequestLogService) {
        this.accessRequestLogService = accessRequestLogService;
    }

    @GetMapping
    public List<AccessRequestModel> getAllAccessRequests() {
        return accessRequestLogService.getAllSortedByDate();
    }
}
