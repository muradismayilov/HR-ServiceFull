package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.abstracts.EmployeeService;
import com.muradismayilov.hrservice.business.core.utulities.mappers.ModelMapperService;
import com.muradismayilov.hrservice.business.requests.CreateEmployeeRequest;
import com.muradismayilov.hrservice.business.requests.UpdateEmployeeRequest;
import com.muradismayilov.hrservice.business.responses.GetAllEmployeesResponse;
import com.muradismayilov.hrservice.business.responses.GetEmployeeByIdResponse;
import com.muradismayilov.hrservice.business.rules.EmployeeBusinessRules;
import com.muradismayilov.hrservice.dataaccess.abstracts.EmployeeRepository;
import com.muradismayilov.hrservice.dataaccess.abstracts.JobRepository;
import com.muradismayilov.hrservice.entity.concretes.Employee;
import com.muradismayilov.hrservice.entity.concretes.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Data
@AllArgsConstructor
@Service
public class EmployeeSeviceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private ModelMapperService modelMapperService;
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private EmployeeBusinessRules employeeBusinessRules;

    @Override
    public List<GetAllEmployeesResponse> getAll() {
        List<Employee> list = employeeRepository.findAll();
       /* List<GetAllEmployeesResponse> response = new ArrayList<>();
        for (Employee emp: list) {
            GetAllEmployeesResponse responseitem = new GetAllEmployeesResponse();
            responseitem.setId(emp.getId());
            responseitem.setName(emp.getName());
            responseitem.setSurname(emp.getSurname());
            responseitem.setFathername(emp.getFathername());
            responseitem.setUsername(emp.getUsername());
            responseitem.setGender(emp.getGender());
            responseitem.setBirthdate(emp.getBirthdate());
            responseitem.setWorkstatus(emp.isWorkstatus());
            responseitem.setDirector(emp.getDirector());
            responseitem.setRegisterdate(emp.getRegisterdate());
            responseitem.setPasschangedate(emp.getPasschangedate());
            //responseitem.setJobname(emp.getJob().getJobname());
            //responseitem.setDepartmentname(emp.getJob().getDepartment().getDepartmentname());


            response.add(responseitem);

        }*/

       List<GetAllEmployeesResponse> response = list.stream()
                .map(employee -> this.modelMapperService.forResponse()
                        .map(employee, GetAllEmployeesResponse.class))
                .collect(Collectors.toList());

        return response;
    }

    @Override
    public void addEmployee(CreateEmployeeRequest createEmployeeRequest) {
        //employeeBusinessRules.checkIfEmployeeUsernameExists(createEmployeeRequest.getUsername());
         Employee emp = new Employee();
         Job j= jobRepository.findById(createEmployeeRequest.getJobId()).orElse(null);
        emp.setName(createEmployeeRequest.getName());
        emp.setSurname(createEmployeeRequest.getSurname());
        emp.setFathername(createEmployeeRequest.getFathername());
        emp.setUsername(createEmployeeRequest.getUsername());
        emp.setGender(createEmployeeRequest.getGender());
        emp.setBirthdate(createEmployeeRequest.getBirthdate());
        emp.setWorkstatus(createEmployeeRequest.isWorkstatus());
        emp.setDirector(createEmployeeRequest.getDirector());
        emp.setPassword(createEmployeeRequest.getPassword());
        emp.setRegisterdate(createEmployeeRequest.getRegisterdate());
        emp.setPasschangedate(createEmployeeRequest.getPasschangedate());
        emp.setJob(j);
        employeeRepository.save(emp);



       /*Employee emp = this.modelMapperService.forRequest().map(createEmployeeRequest,Employee.class);
        employeeRepository.save(emp);*/



    }

    @Override
    public void updateEmployee(UpdateEmployeeRequest updateEmployeeRequest) {

        Employee emp = employeeRepository.findById(updateEmployeeRequest.getId()).orElse(null);
        Job j= jobRepository.findById(updateEmployeeRequest.getJobId()).orElse(null);

        emp.setId(updateEmployeeRequest.getId());
        emp.setName(updateEmployeeRequest.getName());
        emp.setSurname(updateEmployeeRequest.getSurname());
        emp.setFathername(updateEmployeeRequest.getFathername());
        emp.setUsername(updateEmployeeRequest.getUsername());
        emp.setGender(updateEmployeeRequest.getGender());
        emp.setBirthdate(updateEmployeeRequest.getBirthdate());
        emp.setWorkstatus(updateEmployeeRequest.isWorkstatus());
        emp.setDirector(updateEmployeeRequest.getDirector());
        emp.setPassword(updateEmployeeRequest.getPassword());
        emp.setRegisterdate(updateEmployeeRequest.getRegisterdate());
        emp.setPasschangedate(updateEmployeeRequest.getPasschangedate());
        emp.setJob(j);
        employeeRepository.save(emp);


        /*Employee  emp = this.modelMapperService.forRequest().map(updateEmployeeRequest,Employee.class);
        employeeRepository.save(emp);*/



    }

    @Override
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);

    }

    @Override
    public GetEmployeeByIdResponse getEmployeeById(int id) {
        Employee emp = employeeRepository.findById(id).orElseThrow();
        /*GetEmployeeByIdResponse responseitem = new GetEmployeeByIdResponse();
        responseitem.setId(emp.getId());
        responseitem.setName(emp.getName());
        responseitem.setSurname(emp.getSurname());
        responseitem.setFathername(emp.getFathername());
        responseitem.setUsername(emp.getUsername());
        responseitem.setGender(emp.getGender());
        responseitem.setBirthdate(emp.getBirthdate());
        responseitem.setWorkstatus(emp.isWorkstatus());
        responseitem.setDirector(emp.getDirector());
        responseitem.setRegisterdate(emp.getRegisterdate());
        responseitem.setPasschangedate(emp.getPasschangedate());
        //responseitem.setJobname(emp.getJob().getJobname());
        //responseitem.setDepartmentname(emp.getJob().getDepartment().getDepartmentname());*/

        GetEmployeeByIdResponse responseitem =
                 this.modelMapperService.forResponse()
                        .map(emp, GetEmployeeByIdResponse.class);

        return responseitem;
    }




}
