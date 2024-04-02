package com.backend.admin_server.access_requests.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.PaginatedQueryList;
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


    public AccessRequestModel findByUserId(Integer userId) {
        AccessRequestModel queryObject = new AccessRequestModel();
        queryObject.setUserId(userId);

        DynamoDBQueryExpression<AccessRequestModel> queryExpression = new DynamoDBQueryExpression<AccessRequestModel>()
                .withHashKeyValues(queryObject);

        PaginatedQueryList<AccessRequestModel> result = dynamoDBMapper.query(AccessRequestModel.class, queryExpression);

        return result.isEmpty() ? null : result.get(0);
    }
}
