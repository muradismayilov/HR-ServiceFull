package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllVacanciesResponse {

    private int id;
    private int vacancy;
    private String departmentName;
    private String jobName;

}
