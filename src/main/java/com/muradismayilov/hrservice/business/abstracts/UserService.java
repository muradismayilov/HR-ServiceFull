package com.muradismayilov.hrservice.business.abstracts;


import com.muradismayilov.hrservice.entity.concretes.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    List<User> getUsers();



}
