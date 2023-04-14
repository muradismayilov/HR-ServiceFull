package com.muradismayilov.hrservice.dataaccess.abstracts;

import com.muradismayilov.hrservice.entity.concretes.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Integer> {
}
