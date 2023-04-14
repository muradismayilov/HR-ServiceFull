package com.muradismayilov.hrservice.business.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class UpdateJobRequest {
    private int id;
    private Long code;
    private String name;
    private boolean manager;
    private int departmentId;

}
