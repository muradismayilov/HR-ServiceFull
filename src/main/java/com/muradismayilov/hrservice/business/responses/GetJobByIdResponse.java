package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetJobByIdResponse {
    private int id;
    private Long code;
    private String name;
    private boolean manager;
    private int vacancy;
     private int departmentId;
    private String departmentName;

}
