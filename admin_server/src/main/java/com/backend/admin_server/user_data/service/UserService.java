package com.backend.admin_server.user_data.service;

import com.backend.admin_server.user_data.model.User;
import com.backend.admin_server.user_data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAllUsers();
    }
}