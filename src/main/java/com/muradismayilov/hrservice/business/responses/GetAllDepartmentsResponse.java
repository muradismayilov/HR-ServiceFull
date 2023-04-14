package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllDepartmentsResponse {
    private int id;
    private Long code;
    private String name;

}
