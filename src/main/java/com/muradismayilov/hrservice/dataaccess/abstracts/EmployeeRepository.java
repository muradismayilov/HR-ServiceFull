package com.muradismayilov.hrservice.dataaccess.abstracts;


import com.muradismayilov.hrservice.entity.concretes.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    boolean existsByUsername(String username);

      Employee findByUsername(String username);
}
