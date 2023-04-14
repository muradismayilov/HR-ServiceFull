package com.muradismayilov.hrservice.entity.concretes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Miscellaneous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String surname;
    private String username;
    private Date indate;
    private Date outdate;
    private String jobName;
    private String departmentName;

    @OneToOne
    private Job job;
    @OneToOne
    private Department department;
}
