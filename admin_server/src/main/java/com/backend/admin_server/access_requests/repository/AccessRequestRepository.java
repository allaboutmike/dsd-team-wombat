package com.backend.admin_server.access_requests.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import org.springframework.stereotype.Repository;

@Repository
public class AccessRequestRepository {

    private final DynamoDBMapper dynamoDBMapper;

    public AccessRequestRepository(DynamoDBMapper dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    public void save(AccessRequestModel accessRequestModel) {
        dynamoDBMapper.save(accessRequestModel);
    }

}
