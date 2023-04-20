package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.abstracts.JobService;
import com.muradismayilov.hrservice.business.core.utulities.mappers.ModelMapperService;
import com.muradismayilov.hrservice.business.requests.CreateJobRequest;
import com.muradismayilov.hrservice.business.requests.UpdateJobRequest;
import com.muradismayilov.hrservice.business.responses.GetAllJobsResponse;
import com.muradismayilov.hrservice.business.responses.GetJobByIdResponse;
import com.muradismayilov.hrservice.dataaccess.abstracts.DepartmentRepository;
import com.muradismayilov.hrservice.dataaccess.abstracts.JobRepository;
import com.muradismayilov.hrservice.entity.concretes.Department;
import com.muradismayilov.hrservice.entity.concretes.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Data
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public List<GetAllJobsResponse> getAll() {
        List<Job> jobs = jobRepository.findAll();
       /* List<GetAllJobsResponse> responses = new ArrayList<>();
        for(Job job: jobs){
            GetAllJobsResponse response = new GetAllJobsResponse();
            response.setId(job.getId());
            response.setJobcode(job.getJobcode());
            response.setJobname(job.getJobname());
            response.setManager(job.isManager());
            response.setDepartmentId(job.getDepartment().getId());
            response.setDepartmentname(job.getDepartment().getDepartmentname());

            responses.add(response);
        }*/
        List<GetAllJobsResponse> responses = jobs.stream()
                .map(job -> this.modelMapperService.forResponse()
                        .map(job, GetAllJobsResponse.class))
                .collect(Collectors.toList());
        return responses;
    }

    @Override
    public void addJob(CreateJobRequest createJobRequest) {
        Department dep = departmentRepository.findById(createJobRequest.getDepartmentId()).orElse(null);
        Job job = new Job();
        job.setName(createJobRequest.getName());
        job.setCode(createJobRequest.getCode());
        job.setManager(createJobRequest.isManager());
        job.setVacancy(createJobRequest.getVacancy());
        job.setDepartment(dep);
        jobRepository.save(job);

        /*Job job = this.modelMapperService.forRequest().map(createJobRequest, Job.class);
        this.jobRepository.save(job);*/
    }

    @Override
    public GetJobByIdResponse getJobById(int id) {
        Job job = jobRepository.findById(id).orElseThrow();
       /*GetJobByIdResponse response = new GetJobByIdResponse();
       response.setId(job.getId());
       response.setJobcode(job.getJobcode());
       response.setJobname(job.getJobname());
       response.setManager(job.isManager());*/

        GetJobByIdResponse response =
                this.modelMapperService.forResponse()
                        .map(job, GetJobByIdResponse.class);
        return response;
    }

    @Override
    public void updateJob(UpdateJobRequest updateJobRequest) {

        Department dep = departmentRepository.findById(updateJobRequest.getDepartmentId()).orElse(null);

        Job job =new Job();
        job.setCode(updateJobRequest.getCode());
        job.setId(updateJobRequest.getId());
        job.setName(updateJobRequest.getName());
        job.setManager(updateJobRequest.isManager());
        job.setVacancy(updateJobRequest.getVacancy());
        job.setDepartment(dep);
        jobRepository.save(job);

        /*Job job = this.modelMapperService.forRequest().map(updateJobRequest, Job.class);
        jobRepository.save(job);*/
    }

    @Override
    public void deleteJob(int id) {
        jobRepository.deleteById(id);
    }


}