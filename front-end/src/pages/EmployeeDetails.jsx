import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";
import { Button } from "semantic-ui-react";

export default function EmployeeDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [employee, setemployee] = useState({
    id: "",
    name: "",
    surname: "",
    fathername: "",
    username: "",
    gender: "",
    birthdate: "",
    workstatus: "",
    director: "",
    registerdate: "",
   
    passchangedate: "",
    jobId: "",
  });
  let employeeService = new EmployeeService();

  function updateEmployee(prop, value) {
    const newemployee = { ...employee };
    newemployee[prop] = value;
    setemployee(newemployee);
  }

  function save() {
    employeeService.updateEmployee(jwt, employee);
  }

  function deleteEmployee() {
    employeeService.deleteEmployee(id, jwt);
  }

  useEffect(() => {
    employeeService
      .getEmployeeById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setemployee(res.data);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [id]);

  return (
    <div>
      <h1>
        employee id: {employee.id} employee name:
        {employee.name}
      </h1>

      <h3>
        ID:{" "}
        <input
          type="id"
          id="id"
          onChange={(e) => updateEmployee("id", e.target.value)}
          value={employee.id}
        />
      </h3>

      <h3>
        employee name:{" "}
        <input
          type="name"
          id="name"
          onChange={(e) => updateEmployee("name", e.target.value)}
          value={employee.name}
        />
      </h3>
      <h3>
        employee surname:{" "}
        <input
          type="surname"
          id="surname"
          onChange={(e) => updateEmployee("surname", e.target.value)}
          value={employee.surname}
        />
      </h3>
      <h3>
        employee fathername:{" "}
        <input
          type="fathername"
          id="fathername"
          onChange={(e) => updateEmployee("fathername", e.target.value)}
          value={employee.fathername}
        />
      </h3>
      <h3>
        employee username:{" "}
        <input
          type="username"
          id="username"
          onChange={(e) => updateEmployee("username", e.target.value)}
          value={employee.username}
        />
      </h3>
      <h3>
        employee gender:{" "}
        <input
          type="gender"
          id="gender"
          onChange={(e) => updateEmployee("gender", e.target.value)}
          value={employee.gender}
        />
      </h3>
      <h3>
        employee birthdate:{" "}
        <input
          type="birthdate"
          id="birthdate"
          onChange={(e) => updateEmployee("birthdate", e.target.value)}
          value={employee.birthdate}
        />
      </h3>
      <h3>
        employee workstatus:{" "}
        <input
          type="workstatus"
          id="workstatus"
          onChange={(e) => updateEmployee("workstatus", e.target.value)}
          value={employee.workstatus}
        />
      </h3>
      <h3>
        employee director:{" "}
        <input
          type="director"
          id="director"
          onChange={(e) => updateEmployee("director", e.target.value)}
          value={employee.director}
        />
      </h3>
      <h3>
        employee registerdate:{" "}
        <input
          type="registerdate"
          id="registerdate"
          onChange={(e) => updateEmployee("registerdate", e.target.value)}
          value={employee.registerdate}
        />
      </h3>
      <h3>
        employee password:{" "}
        <input
          type="password"
          id="password"
          onChange={(e) => updateEmployee("password", e.target.value)}
          value={employee.password}
        />
      </h3>
      <h3>
        employee passchangedate:{" "}
        <input
          type="passchangedate"
          id="passchangedate"
          onChange={(e) => updateEmployee("passchangedate", e.target.value)}
          value={employee.passchangedate}
        />
      </h3>
      <h3>
        employee jobId:{" "}
        <input
          type="jobId"
          id="jobId"
          onChange={(e) => updateEmployee("jobId", e.target.value)}
          value={employee.jobId}
        />
      </h3>

      <h3>
        <Button onClick={() => save()}>Submit Employee</Button>
      </h3>
      <h3>
        <Button onClick={() => deleteEmployee()}>Delete Employee</Button>
      </h3>
    </div>
  );
}
