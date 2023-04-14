package com.muradismayilov.hrservice.business.abstracts;

import com.muradismayilov.hrservice.business.requests.CreateEmployeeRequest;
import com.muradismayilov.hrservice.business.requests.UpdateEmployeeRequest;
import com.muradismayilov.hrservice.business.responses.GetAllEmployeesResponse;

import com.muradismayilov.hrservice.business.responses.GetEmployeeByIdResponse;


import java.util.List;

public interface EmployeeService {

    List<GetAllEmployeesResponse> getAll();

    void addEmployee(CreateEmployeeRequest createEmployeeRequest);
    void updateEmployee(UpdateEmployeeRequest updateEmployeeRequest);
    void deleteEmployee(int id);

     GetEmployeeByIdResponse getEmployeeById(int id);


}
