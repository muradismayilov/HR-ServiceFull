package com.muradismayilov.hrservice.business.abstracts;

import com.muradismayilov.hrservice.business.requests.CreateJobRequest;
import com.muradismayilov.hrservice.business.requests.UpdateJobRequest;
import com.muradismayilov.hrservice.business.responses.GetAllJobsResponse;
import com.muradismayilov.hrservice.business.responses.GetJobByIdResponse;

import java.util.List;

public interface JobService {
    List<GetAllJobsResponse> getAll();

    void addJob(CreateJobRequest createJobRequest);

    GetJobByIdResponse getJobById(int id);

    void updateJob(UpdateJobRequest updateJobRequest);

    void deleteJob(int id);


}
