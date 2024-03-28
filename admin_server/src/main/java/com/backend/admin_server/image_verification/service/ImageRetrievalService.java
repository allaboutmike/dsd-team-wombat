package com.backend.admin_server.image_verification.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Base64;

@Service
public class ImageRetrievalService {

    public void processBase64Image (String base64Image) {

        byte[] imageBytes = Base64.getDecoder().decode(base64Image);

        System.out.println(Arrays.toString(imageBytes));
    }
}
