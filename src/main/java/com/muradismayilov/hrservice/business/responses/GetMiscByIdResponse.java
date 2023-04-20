package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetMiscByIdResponse {

    private int id;
    private String name;
    private String surname;
    private String username;
    private Date indate;
    private Date outdate;
    private String jobName;
    private String departmentName;

    private int jobId;
}
