package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.abstracts.MiscService;
import com.muradismayilov.hrservice.business.core.utulities.mappers.ModelMapperService;
import com.muradismayilov.hrservice.business.requests.CreateMiscRequest;
import com.muradismayilov.hrservice.business.requests.UpdateMiscRequest;
import com.muradismayilov.hrservice.business.responses.GetAllMiscResponse;
import com.muradismayilov.hrservice.business.responses.GetEmployeeByIdResponse;
import com.muradismayilov.hrservice.business.responses.GetMiscByIdResponse;
import com.muradismayilov.hrservice.dataaccess.abstracts.EmployeeRepository;
import com.muradismayilov.hrservice.dataaccess.abstracts.JobRepository;
import com.muradismayilov.hrservice.dataaccess.abstracts.MiscRepository;
import com.muradismayilov.hrservice.entity.concretes.Employee;
import com.muradismayilov.hrservice.entity.concretes.Job;
import com.muradismayilov.hrservice.entity.concretes.Miscellaneous;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Data
@AllArgsConstructor
@Service
public class MiscServiceImpl implements MiscService {
    @Autowired
    private MiscRepository miscRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ModelMapperService modelMapperService;


    @Override
    public void addMisc(String username,CreateMiscRequest createMiscRequest) {
        List<Miscellaneous> miscellaneousarray = miscRepository.findAllByUsername(username);
        //Miscellaneous oldMisc = miscRepository.findByUsername(username);
        Job j = jobRepository.findById(createMiscRequest.getJobId()).orElse(null);
        Employee emp = employeeRepository.findByUsername(username);
        Miscellaneous miscellaneous = new Miscellaneous();

        if (miscellaneousarray == null) {
            miscellaneous.setName(emp.getName());
            miscellaneous.setSurname(emp.getSurname());
            miscellaneous.setUsername(emp.getUsername());
            miscellaneous.setIndate(createMiscRequest.getIndate());
            miscellaneous.setOutdate(createMiscRequest.getOutdate());
            miscellaneous.setJob(emp.getJob());
            miscellaneous.setDepartment(emp.getJob().getDepartment());
            miscellaneous.setDepartmentName(emp.getJob().getDepartment().getName());
            miscellaneous.setJobName(emp.getJob().getName());
            miscRepository.save(miscellaneous);

        } else  {
            for (Miscellaneous misc: miscellaneousarray) {
            if(misc.getOutdate()==null){
                if (misc.getJob().getId() != createMiscRequest.getJobId()) {
                    misc.setOutdate(createMiscRequest.getIndate());
                    miscRepository.save(misc);
                    miscellaneous.setName(misc.getName());
                    miscellaneous.setSurname(misc.getSurname());
                    miscellaneous.setIndate(createMiscRequest.getIndate());
                    miscellaneous.setOutdate(createMiscRequest.getOutdate());
                    miscellaneous.setUsername(misc.getUsername());
                    miscellaneous.setJobName(j.getName());
                    miscellaneous.setDepartmentName(j.getDepartment().getName());
                    miscellaneous.setJob(j);
                    miscellaneous.setDepartment(j.getDepartment());
                } else {
                    miscellaneous.setName(emp.getName());
                    miscellaneous.setSurname(emp.getSurname());
                    miscellaneous.setUsername(emp.getUsername());
                    miscellaneous.setIndate(createMiscRequest.getIndate());
                    miscellaneous.setOutdate(createMiscRequest.getOutdate());
                    miscellaneous.setJob(emp.getJob());
                    miscellaneous.setDepartment(emp.getJob().getDepartment());
                    miscellaneous.setDepartmentName(emp.getJob().getDepartment().getName());
                    miscellaneous.setJobName(emp.getJob().getName());

                }
                miscRepository.save(miscellaneous);
            }
            }
        }
    }

    @Override
    public List<GetAllMiscResponse> getAll() {
            List<Miscellaneous> miscellaneous = miscRepository.findAll();
            List<GetAllMiscResponse> responses = new ArrayList<>();
        for (Miscellaneous misc: miscellaneous) {
            GetAllMiscResponse response = new GetAllMiscResponse();
            response.setId(misc.getId());
            response.setName(misc.getName());
            response.setSurname(misc.getSurname());
            response.setUsername(misc.getUsername());
            response.setIndate(misc.getIndate());
            response.setOutdate(misc.getOutdate());
            response.setJobName(misc.getJobName());
            response.setDepartmentName(misc.getDepartmentName());
            responses.add(response);
        }
        return responses;
    }

    @Override
    public void deleteMisc(int id) {
        miscRepository.deleteById(id);
    }

    @Override
    public void updateMisc(String username, UpdateMiscRequest updateMiscRequest) {

        /*Miscellaneous oldMisc = miscRepository.findByUsername(username);

        Job j = jobRepository.findById(updateMiscRequest.getJobId()).orElse(null);
        Miscellaneous miscellaneous = new Miscellaneous();


                if (oldMisc.getJob().getId()!=updateMiscRequest.getJobId()) {
                    oldMisc.setOutdate(updateMiscRequest.getIndate());
                    miscRepository.save(oldMisc);
                    miscellaneous.setName(oldMisc.getName());
                    miscellaneous.setSurname(oldMisc.getSurname());
                    miscellaneous.setIndate(updateMiscRequest.getIndate());
                    miscellaneous.setOutdate(updateMiscRequest.getOutdate());
                    miscellaneous.setUsername(oldMisc.getUsername());
                    miscellaneous.setJobName(j.getName());
                    miscellaneous.setDepartmentName(j.getDepartment().getName());
                    miscellaneous.setJob(j);
                    miscellaneous.setDepartment(j.getDepartment());
                    miscRepository.save(miscellaneous);
                }else{

                    oldMisc.setName(updateMiscRequest.getName());
                    oldMisc.setSurname(updateMiscRequest.getSurname());
                    oldMisc.setUsername(updateMiscRequest.getUsername());
                    oldMisc.setIndate(updateMiscRequest.getIndate());
                    oldMisc.setOutdate(updateMiscRequest.getOutdate());

                    miscRepository.save(oldMisc);

                }*/




        List<Miscellaneous> miscellaneousarray = miscRepository.findAllByUsername(username);


        Job j = jobRepository.findById(updateMiscRequest.getJobId()).orElse(null);
        Miscellaneous miscellaneous = new Miscellaneous();
        for (Miscellaneous misc: miscellaneousarray) {
            if (misc.getId()==updateMiscRequest.getId()) {
                if (misc.getJob().getId()!=updateMiscRequest.getJobId()) {
                    misc.setOutdate(updateMiscRequest.getIndate());
                    miscRepository.save(misc);
                    miscellaneous.setName(misc.getName());
                    miscellaneous.setSurname(misc.getSurname());
                    miscellaneous.setIndate(updateMiscRequest.getIndate());
                    miscellaneous.setOutdate(updateMiscRequest.getOutdate());
                    miscellaneous.setUsername(misc.getUsername());
                    miscellaneous.setJobName(j.getName());
                    miscellaneous.setDepartmentName(j.getDepartment().getName());
                    miscellaneous.setJob(j);
                    miscellaneous.setDepartment(j.getDepartment());
                    miscRepository.save(miscellaneous);
                }else{

                    misc.setName(updateMiscRequest.getName());
                    misc.setSurname(updateMiscRequest.getSurname());
                    misc.setUsername(updateMiscRequest.getUsername());
                    misc.setIndate(updateMiscRequest.getIndate());
                    misc.setOutdate(updateMiscRequest.getOutdate());

                    miscRepository.save(misc);

            }
        }

        }






    }

    @Override
    public GetMiscByIdResponse getMiscById(int id) {
       Miscellaneous misc = miscRepository.findById(id).orElse(null);


       GetMiscByIdResponse response = new GetMiscByIdResponse();
       response.setId(misc.getId());
       response.setName(misc.getName());
       response.setSurname(misc.getSurname());
       response.setUsername(misc.getUsername());
       response.setIndate(misc.getIndate());
       response.setOutdate(misc.getOutdate());
       response.setJobName(misc.getJobName());
       response.setDepartmentName(misc.getDepartmentName());
       response.setJobId(misc.getJob().getId());

       return response;




       /*GetMiscByIdResponse responseitem =
                this.modelMapperService.forResponse()
                        .map(misc, GetMiscByIdResponse.class);

        return responseitem;*/
    }
}
