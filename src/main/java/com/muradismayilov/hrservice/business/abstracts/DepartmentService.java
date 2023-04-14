package com.muradismayilov.hrservice.business.abstracts;

import com.muradismayilov.hrservice.business.requests.CreateDepartmentRequest;
import com.muradismayilov.hrservice.business.requests.UpdateDepartmentRequest;
import com.muradismayilov.hrservice.business.responses.GetAllDepartmentsResponse;
import com.muradismayilov.hrservice.business.responses.GetDepartmentByIdResponse;

import java.util.List;

public interface DepartmentService {
    List<GetAllDepartmentsResponse> getAll();

    void addDepartment(CreateDepartmentRequest createDepartmentRequest);

    GetDepartmentByIdResponse getDepartmentById(int id);

    void updateDepartment(UpdateDepartmentRequest updateDepartmentRequest);

    void deleteDepartment(int id);
}
