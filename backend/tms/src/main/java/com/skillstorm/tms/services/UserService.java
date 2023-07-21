package com.skillstorm.tms.services;


import com.skillstorm.tms.messages.Message;
import com.skillstorm.tms.models.User;
import com.skillstorm.tms.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;






@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    Message m = new Message();

    public Message newUser(User user) {
        try{  userRepository.save(user);
            m.setInfo("saved");
            return m;
        }catch (Exception e ){
            m.setInfo("invalid input");

            return m;
        }
    }

}
