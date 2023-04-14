package com.muradismayilov.hrservice.entity.concretes;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "code")
    private Long code;
    @Column(name = "name")
    private String name;
    @Column(name = "manager")
    private boolean manager =false;




    @ManyToOne()
    @JoinColumn(name="department_id")
    private Department department;

    @OneToMany(mappedBy = "job")
    private List<Employee> employees;

    //@JoinColumn(name="job_id",referencedColumnName = "jobId")
}
