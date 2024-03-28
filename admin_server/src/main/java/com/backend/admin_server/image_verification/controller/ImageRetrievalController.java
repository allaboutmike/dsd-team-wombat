package com.backend.admin_server.image_verification.controller;

import com.backend.admin_server.image_verification.service.ImageRetrievalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ImageRetrievalController {

    private final ImageRetrievalService imageRetrievalService;

    public ImageRetrievalController(ImageRetrievalService imageRetrievalService) {
        this.imageRetrievalService = imageRetrievalService;
    }

    @PostMapping("/verify-image")
    public ResponseEntity<String> uploadImage(@RequestBody String base64Image) {
        try {
            imageRetrievalService.processBase64Image(base64Image);
            return ResponseEntity.ok("Image processed");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing the image");
        }
    }
}
