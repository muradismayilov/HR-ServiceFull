package com.muradismayilov.hrservice.business.rules;

import com.muradismayilov.hrservice.business.core.utulities.exceptions.BusinessException;
import com.muradismayilov.hrservice.dataaccess.abstracts.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Service
public class EmployeeBusinessRules {

    private EmployeeRepository employeeRepository;

    public void checkIfEmployeeUsernameExists(String username){

        if (employeeRepository.existsByUsername(username)) {

            throw new BusinessException("Username already excits");
        }
    }

}
