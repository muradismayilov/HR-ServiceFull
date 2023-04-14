package com.muradismayilov.hrservice.business.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateEmployeeRequest {

    @NotBlank
    @NotNull
    private String name;
    private String surname;

    private String fathername;


    @NotBlank
    @NotNull
    private String username;
    private String gender;
    private Date birthdate;
    private boolean workstatus;
    private String director;

    private Date registerdate;
    @NotBlank
    @NotNull
    private String password;

    private Date passchangedate;

    private int jobId;



}
