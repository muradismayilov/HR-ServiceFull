package com.muradismayilov.hrservice.entity.concretes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Vacancy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int vacancy;
    private String jobName;
    private String departmentName;

    @OneToOne
    private Job job;
    @OneToOne
    private Department department;
}
