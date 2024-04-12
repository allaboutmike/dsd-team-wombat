package com.backend.admin_server.user_data.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.backend.admin_server.user_data.model.UserModel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    private final DynamoDBMapper dynamoDBMapper;

    public UserRepository(DynamoDBMapper dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    public List<UserModel> findAllUsers() {
        return dynamoDBMapper.scan(UserModel.class, new DynamoDBScanExpression());
    }

    public UserModel findByUserId(Integer userId) {
        return dynamoDBMapper.load(UserModel.class, userId);
    }

}