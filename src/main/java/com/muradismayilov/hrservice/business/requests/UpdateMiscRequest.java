package com.muradismayilov.hrservice.business.requests;

import com.muradismayilov.hrservice.entity.concretes.Department;
import com.muradismayilov.hrservice.entity.concretes.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateMiscRequest {

    private int id;
    private String name;
    private String surname;
    private String username;
    private Date indate;
    private Date outdate;
    private int jobId;

}
