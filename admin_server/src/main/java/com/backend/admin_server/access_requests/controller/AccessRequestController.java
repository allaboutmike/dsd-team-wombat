package com.backend.admin_server.access_requests.controller;

import com.backend.admin_server.access_requests.service.AccessRequestService;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<String> uploadImage(@RequestBody String base64Image) {
        try {
            accessRequestService.processBase64Image(base64Image);
            return ResponseEntity.ok("Image processed");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing the image");
        }
    }
}
