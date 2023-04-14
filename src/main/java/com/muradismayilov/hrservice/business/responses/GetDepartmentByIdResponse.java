package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetDepartmentByIdResponse {

    private int id;
    private long code;
    private String name;
}
