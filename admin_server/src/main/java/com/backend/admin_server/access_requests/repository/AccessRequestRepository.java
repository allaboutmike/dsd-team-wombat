package com.backend.admin_server.access_requests.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.backend.admin_server.access_requests.model.AccessRequestModel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccessRequestRepository {

    private final DynamoDBMapper dynamoDBMapper;

    public AccessRequestRepository(DynamoDBMapper dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    public AccessRequestModel save(AccessRequestModel accessRequestModel) {
        dynamoDBMapper.save(accessRequestModel);
        return accessRequestModel;
    }

    public List<AccessRequestModel> findAll() {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        return dynamoDBMapper.scan(AccessRequestModel.class, scanExpression);
    }

    public AccessRequestModel findByRequestId(String date, String requestId) {
        return dynamoDBMapper.load(AccessRequestModel.class, date, requestId);
    }

}