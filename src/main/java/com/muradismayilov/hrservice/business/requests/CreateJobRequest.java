package com.muradismayilov.hrservice.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateJobRequest {

    private Long code;

    private String name;

    private boolean manager;

    private int vacancy;

    private int departmentId;


}
