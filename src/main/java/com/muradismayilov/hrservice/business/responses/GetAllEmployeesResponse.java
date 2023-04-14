package com.muradismayilov.hrservice.business.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllEmployeesResponse {

    private int id;
    private String name;
    private String surname;

    private String fathername;

    private String username;
    private String gender;
    private Date birthdate;
    private boolean workstatus;
    private String director;
    private Date registerdate;
    private Date passchangedate;
    private int jobId;
    private String jobName;
    private String departmentName;
}
