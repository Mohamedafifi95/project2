package com.skillstorm.tms.controllers;

import com.skillstorm.tms.messages.Message;
import com.skillstorm.tms.models.User;
import com.skillstorm.tms.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/tms")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping("/add")
    public Message createUser(@Valid @RequestBody User user) throws Exception {



        return userService.newUser(user);
    }
}
