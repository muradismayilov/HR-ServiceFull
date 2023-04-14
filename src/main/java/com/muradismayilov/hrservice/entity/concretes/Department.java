package com.muradismayilov.hrservice.entity.concretes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "code")
    private long code;
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "department")
      private List<Job> jobs;

    // @JoinColumn(name="department_id",referencedColumnName = "departmentId")
}
