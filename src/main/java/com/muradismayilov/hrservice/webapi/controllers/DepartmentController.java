package com.muradismayilov.hrservice.webapi.controllers;

import com.muradismayilov.hrservice.business.abstracts.DepartmentService;
import com.muradismayilov.hrservice.business.requests.CreateDepartmentRequest;
import com.muradismayilov.hrservice.business.requests.UpdateDepartmentRequest;
import com.muradismayilov.hrservice.business.responses.GetAllDepartmentsResponse;
import com.muradismayilov.hrservice.business.responses.GetDepartmentByIdResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/department")
@CrossOrigin
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping()
    public List<GetAllDepartmentsResponse> getAll(){

        return departmentService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code= HttpStatus.CREATED)
    void add(@RequestBody  CreateDepartmentRequest createDepartmentRequest){
       departmentService.addDepartment(createDepartmentRequest);
    }

    @GetMapping("/{id}")
    public GetDepartmentByIdResponse getById(@PathVariable int id){
        return departmentService.getDepartmentById(id);
    }

    @PutMapping()
    public void update(@RequestBody UpdateDepartmentRequest updateDepartmentRequest){
       departmentService.updateDepartment(updateDepartmentRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        departmentService.deleteDepartment(id);
    }
}
