package com.muradismayilov.hrservice.dataaccess.abstracts;

import com.muradismayilov.hrservice.entity.concretes.Vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VacancyRepository extends JpaRepository<Vacancy,Integer> {
}
