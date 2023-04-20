package com.muradismayilov.hrservice.webapi.controllers;

import com.muradismayilov.hrservice.business.abstracts.JobService;
import com.muradismayilov.hrservice.business.requests.CreateJobRequest;
import com.muradismayilov.hrservice.business.requests.UpdateJobRequest;
import com.muradismayilov.hrservice.business.responses.GetAllJobsResponse;
import com.muradismayilov.hrservice.business.responses.GetJobByIdResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/job")
@CrossOrigin
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping()
    public List<GetAllJobsResponse> getAll(){

        return jobService.getAll();
    }

    @PostMapping()
    @ResponseStatus(code= HttpStatus.CREATED)
    void add(@RequestBody  CreateJobRequest createJobRequest){
        jobService.addJob(createJobRequest);
    }

    @GetMapping("/{id}")
    public GetJobByIdResponse getById(@PathVariable int id){
        return jobService.getJobById(id);
    }

    @PutMapping()
    public void update(@RequestBody ()UpdateJobRequest updateJobRequest){
        jobService.updateJob(updateJobRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        jobService.deleteJob(id);
    }
}
