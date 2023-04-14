package com.muradismayilov.hrservice.webapi.controllers;

import com.muradismayilov.hrservice.business.abstracts.MiscService;

import com.muradismayilov.hrservice.business.requests.CreateMiscRequest;

import com.muradismayilov.hrservice.business.requests.UpdateMiscRequest;

import com.muradismayilov.hrservice.business.responses.GetAllMiscResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/misc")
public class MiscController {
    @Autowired
    private MiscService miscService;


    @PostMapping("/{username}")
    @ResponseStatus(code= HttpStatus.CREATED)
    void add(@PathVariable String username, @RequestBody CreateMiscRequest createMiscRequest){
        miscService.addMisc(username, createMiscRequest);
    }

    @GetMapping()
    public List<GetAllMiscResponse> getAll(){

        return miscService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){ miscService.deleteMisc(id);
    }

    @PutMapping("/{username}")
    public void update(@PathVariable String username, @RequestBody () UpdateMiscRequest updateMiscRequest){
        miscService.updateMisc(username,updateMiscRequest);
    }

}
