package com.muradismayilov.hrservice.webapi.controllers;

import com.muradismayilov.hrservice.business.concretes.AuthenticationService;
import com.muradismayilov.hrservice.business.concretes.JwtService;
import com.muradismayilov.hrservice.business.requests.UserRequest;
import com.muradismayilov.hrservice.business.responses.UserResponse;
import com.muradismayilov.hrservice.entity.abstracts.UserDto;
import com.muradismayilov.hrservice.entity.concretes.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private final AuthenticationService authenticationService;


    @PostMapping("/save")
    public ResponseEntity<UserResponse> save(@RequestBody UserDto userdto){//UserResponse=AuthenticationResponse  Userdto = Registrationrequest save = register

        return ResponseEntity.ok(authenticationService.save(userdto)) ;

    }

    @PostMapping("/auth")
    public ResponseEntity<UserResponse> auth(@RequestBody UserRequest userRequest){ // Userrequest = Authenticationrequest

        return ResponseEntity.ok(authenticationService.auth(userRequest));
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token, @RequestParam String username){
        boolean isValid=authenticationService.tokenControl(token,username);

        return ResponseEntity.ok(isValid);
    }
}
