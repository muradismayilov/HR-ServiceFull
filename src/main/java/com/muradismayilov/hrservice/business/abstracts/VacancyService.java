package com.muradismayilov.hrservice.business.abstracts;

import com.muradismayilov.hrservice.business.requests.CreateVacancyRequest;
import com.muradismayilov.hrservice.business.requests.UpdateVacancyRequest;
import com.muradismayilov.hrservice.business.responses.GetAllVacanciesResponse;

import java.util.List;

public interface VacancyService {
    void addVacancy(int id, CreateVacancyRequest createVacancyRequest);

    List<GetAllVacanciesResponse> getAllVacancies();

    void deleteVacancy(int id);

    void updateVacancy(int id, UpdateVacancyRequest updateVacancyRequest);
}
