package com.backend.admin_server.access_requests.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccessRequestDTO {
    private String base64Image;
    private String badgeID;

}
