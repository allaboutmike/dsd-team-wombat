package com.backend.admin_server.access_requests.dto;

import com.backend.admin_server.access_requests.enums.RequestStateEnums;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AccessRequestDTO {
    private Integer userId;
    private Date date;
    private String approvalStatus;
    private String base64Image;
    private RequestStateEnums state;
}
