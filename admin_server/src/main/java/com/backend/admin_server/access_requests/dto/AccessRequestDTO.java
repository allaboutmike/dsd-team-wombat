package com.backend.admin_server.access_requests.dto;

import com.backend.admin_server.access_requests.enums.ApprovalStatusEnums;
import com.backend.admin_server.access_requests.enums.RequestStateEnums;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AccessRequestDTO {
    private String requestId;
    private Integer userId;
    private String date;
    private ApprovalStatusEnums approvalStatus;
    private String base64Image;
    private RequestStateEnums state;
    private Date ttl;
}
