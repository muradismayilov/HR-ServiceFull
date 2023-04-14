package com.muradismayilov.hrservice.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateVacancyRequest {

    private int id;
    private int vacancy;

}
