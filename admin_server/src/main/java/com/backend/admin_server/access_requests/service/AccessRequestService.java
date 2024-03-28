package com.backend.admin_server.access_requests.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Base64;

@Service
public class AccessRequestService {

    public void processBase64Image (String base64Image) {

        byte[] imageBytes = Base64.getDecoder().decode(base64Image);

        System.out.println(Arrays.toString(imageBytes));
    }
}
