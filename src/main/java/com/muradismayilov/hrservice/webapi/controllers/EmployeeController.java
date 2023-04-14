package com.muradismayilov.hrservice.webapi.controllers;

import com.muradismayilov.hrservice.business.abstracts.EmployeeService;
import com.muradismayilov.hrservice.business.requests.CreateEmployeeRequest;
import com.muradismayilov.hrservice.business.requests.UpdateEmployeeRequest;
import com.muradismayilov.hrservice.business.responses.GetAllEmployeesResponse;
import com.muradismayilov.hrservice.business.responses.GetEmployeeByIdResponse;
import com.muradismayilov.hrservice.entity.concretes.Employee;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping()
    public List<GetAllEmployeesResponse> getAll(){

        return employeeService.getAll();
    }
    @PostMapping()
    @ResponseStatus(code= HttpStatus.CREATED)
    public void add(@RequestBody  CreateEmployeeRequest createEmployeeRequest){
         employeeService.addEmployee(createEmployeeRequest);
    }


    @GetMapping("/{id}")
    public GetEmployeeByIdResponse getById(@PathVariable int id){
        return employeeService.getEmployeeById(id);
    }

    @PutMapping()
    public void update(@RequestBody  UpdateEmployeeRequest updateEmployeeRequest){
        employeeService.updateEmployee(updateEmployeeRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        employeeService.deleteEmployee(id);
    }
}
