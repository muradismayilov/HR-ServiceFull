package com.muradismayilov.hrservice.entity.concretes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees",uniqueConstraints = @UniqueConstraint(name = "unique_username",columnNames = "username"))
public class Employee /*extends User */{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String surname;

    private String fathername;

    @Column(name = "username",nullable = false)
    private String username;
    private String gender;
    private Date birthdate;
    private boolean workstatus;
    private String director;
    private Date registerdate;
    private String password;
    private Date passchangedate;



    @ManyToOne()
    @JoinColumn(name="job_id")
    private Job job;


   /* public Employee(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public Employee(String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }*/
}
