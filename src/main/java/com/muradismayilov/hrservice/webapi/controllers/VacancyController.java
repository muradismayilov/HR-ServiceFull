package com.muradismayilov.hrservice.webapi.controllers;


import com.muradismayilov.hrservice.business.abstracts.VacancyService;
import com.muradismayilov.hrservice.business.requests.CreateVacancyRequest;
import com.muradismayilov.hrservice.business.requests.UpdateVacancyRequest;
import com.muradismayilov.hrservice.business.responses.GetAllVacanciesResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/vacancy")
public class VacancyController {


    @Autowired
    private VacancyService vacancyService;

    @GetMapping()
    public List<GetAllVacanciesResponse> getAllVacancies(){

        return vacancyService.getAllVacancies();
    }


    @PostMapping("/{id}")
    @ResponseStatus(code= HttpStatus.CREATED)
    void add(@PathVariable int id, @RequestBody CreateVacancyRequest createVacancyRequest){
        vacancyService.addVacancy(id, createVacancyRequest);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){ vacancyService.deleteVacancy(id);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody ()UpdateVacancyRequest updateVacancyRequest){
        vacancyService.updateVacancy(id,updateVacancyRequest);
    }

}
