package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.abstracts.VacancyService;
import com.muradismayilov.hrservice.business.requests.CreateVacancyRequest;
import com.muradismayilov.hrservice.business.requests.UpdateVacancyRequest;
import com.muradismayilov.hrservice.business.responses.GetAllVacanciesResponse;
import com.muradismayilov.hrservice.dataaccess.abstracts.JobRepository;

import com.muradismayilov.hrservice.entity.concretes.Job;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/*@AllArgsConstructor
@Service
public class VacancyServiceImpl implements VacancyService {
    @Autowired
    private VacancyRepository vacancyRepository;
    @Autowired
    private JobRepository jobRepository;


    @Override
    public void addVacancy(int id, CreateVacancyRequest createVacancyRequest) {
        Job job = jobRepository.findById(id).orElseThrow();
        Vacancy vacancy = new Vacancy();
        vacancy.setVacancy(createVacancyRequest.getVacancy());
        vacancy.setJobName(job.getName());
        vacancy.setJob(job);
        vacancy.setDepartmentName(job.getDepartment().getName());
        vacancy.setDepartment(job.getDepartment());
        vacancyRepository.save(vacancy);
    }

    @Override
    public List<GetAllVacanciesResponse> getAllVacancies() {

          List<Vacancy> vac = vacancyRepository.findAll();
          List<GetAllVacanciesResponse> responses = new ArrayList<>();
        for (Vacancy vacancy:vac ) {
            GetAllVacanciesResponse response = new GetAllVacanciesResponse();
            response.setId(vacancy.getId());
            response.setVacancy(vacancy.getVacancy());
            response.setJobName(vacancy.getJobName());
            response.setDepartmentName(vacancy.getDepartmentName());
            responses.add(response);

        }
        return responses;
    }

    @Override
    public void deleteVacancy(int id) {
        vacancyRepository.deleteById(id);
    }

    @Override
    public void updateVacancy(int id, UpdateVacancyRequest updateVacancyRequest) {
        Vacancy vacancy = vacancyRepository.findById(id).orElseThrow();
        vacancy.setId(updateVacancyRequest.getId());
        vacancy.setVacancy(updateVacancyRequest.getVacancy());
        vacancyRepository.save(vacancy);
    }
}*/
