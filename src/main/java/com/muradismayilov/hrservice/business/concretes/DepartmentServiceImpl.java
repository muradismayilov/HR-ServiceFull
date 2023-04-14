package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.abstracts.DepartmentService;
import com.muradismayilov.hrservice.business.requests.CreateDepartmentRequest;
import com.muradismayilov.hrservice.business.requests.UpdateDepartmentRequest;
import com.muradismayilov.hrservice.business.responses.GetAllDepartmentsResponse;
import com.muradismayilov.hrservice.business.responses.GetDepartmentByIdResponse;
import com.muradismayilov.hrservice.dataaccess.abstracts.DepartmentRepository;
import com.muradismayilov.hrservice.entity.concretes.Department;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor

@Data
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public List<GetAllDepartmentsResponse> getAll() {
        List<Department> list = departmentRepository.findAll();
        List<GetAllDepartmentsResponse> response = new ArrayList<>();

        for (Department dep: list ) {
            GetAllDepartmentsResponse responseitem = new GetAllDepartmentsResponse();

            responseitem.setId(dep.getId());
            responseitem.setName(dep.getName());
            responseitem.setCode(dep.getCode());

            response.add(responseitem);

        }
        return response;
    }

    @Override
    public void addDepartment(CreateDepartmentRequest createDepartmentRequest) {
        Department dep = new Department();
        dep.setCode(createDepartmentRequest.getCode());
        dep.setName(createDepartmentRequest.getName());
        departmentRepository.save(dep);
    }

    @Override
    public GetDepartmentByIdResponse getDepartmentById(int id) {
        Department dep = departmentRepository.findById(id).orElseThrow();
        GetDepartmentByIdResponse response = new GetDepartmentByIdResponse();
        response.setId(dep.getId());
        response.setCode(dep.getCode());
        response.setName(dep.getName());
        return response;
    }

    @Override
    public void updateDepartment(UpdateDepartmentRequest updateDepartmentRequest) {
        Department dep = new Department();
        dep.setId(updateDepartmentRequest.getId());
        dep.setCode(updateDepartmentRequest.getCode());
        dep.setName(updateDepartmentRequest.getName());
        departmentRepository.save(dep);
    }

    @Override
    public void deleteDepartment(int id) {
       departmentRepository.deleteById(id);

    }
}
