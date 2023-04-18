import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";

export default function EmployeeDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  

  const [employee, setemployee] = useState({});
  useEffect(() => {
    
    let employeeService = new EmployeeService();
    employeeService
      .getEmployeeById(id,jwt)
      .then(function(res) {
        if (res.status===200){
      
          setemployee(res.data)
          
        console.log(employee)
        
          
        }
      }).catch(function (error) {         
        console.log(error.message);
      })
  }, [id]);

  return (
    <div>
      Employee :{id}
      <h2>
      {employee.name}</h2>
      <h1>{employee.surname}</h1>
      <h3>{employee.fathername}</h3>



      
    </div>
  );
}
