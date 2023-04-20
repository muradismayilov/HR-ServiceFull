import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalState } from "../utilities/useLocalStorage";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Button } from "semantic-ui-react";


export default function DepDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [dep, setdep] = useState({ id: "", code: "", name: "" });
  let employeeService = new EmployeeService();

  function updateDepartment(prop, value) {
    const newdep = { ...dep };
    newdep[prop] = value;
    setdep(newdep);
  }
  function save() {
    employeeService.updateDepartment(jwt, dep);
  }

  function deletedep() {
    employeeService.deleteDepartment(id, jwt);
  }

  useEffect(() => {
    employeeService
      .getDepartmentById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setdep(res.data);

          console.log(dep);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>
        Department id: {dep.id} Department code:{dep.code} Department name:
        {dep.name}
      </h1>

      <h3>
        ID:{" "}
        <input
          type="id"
          id="id"
          onChange={(e) => updateDepartment("id", e.target.value)}
          value={dep.id}
        />
      </h3>
      <h3>
        CODE:{" "}
        <input
          type="code"
          id="code"
          onChange={(e) => updateDepartment("code", e.target.value)}
          value={dep.code}
        />
      </h3>
      <h3>
        Department name:{" "}
        <input
          type="name"
          id="name"
          onChange={(e) => updateDepartment("name", e.target.value)}
          value={dep.name}
        />
      </h3>
      <h3>
        <Button onClick={() => save()}>Submit Department</Button>
      </h3>
      <h3>
        <Button onClick={() => deletedep()}>Delete Department</Button>
      </h3>
    </div>
  );
}
