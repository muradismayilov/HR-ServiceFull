package com.muradismayilov.hrservice.dataaccess.abstracts;

import com.muradismayilov.hrservice.entity.concretes.Miscellaneous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface MiscRepository extends JpaRepository<Miscellaneous,Integer> {

    Miscellaneous findByUsername(String username);

}