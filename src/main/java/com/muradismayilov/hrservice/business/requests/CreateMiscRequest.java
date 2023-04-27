package com.muradismayilov.hrservice.business.requests;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateMiscRequest {


    private Date indate;
    private Date outdate;
    private int jobId;

}
