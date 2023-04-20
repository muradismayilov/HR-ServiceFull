import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function DepPut() {
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [dep, setdep] = useState({ id: "", code: "", name: "" });
  let employeeService = new EmployeeService();

  function updateDepartment(prop, value) {
    
    const newdep = { ...dep };
    newdep[prop] = value;
    setdep(newdep);
   
  }

  function save(){
    employeeService.addDepartment(jwt,dep)
  }


  return (
    <div>
        <h1>
        Department id: {dep.id} Department code:{dep.code} Department name:
        {dep.name}
      </h1>

      
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
        <Button onClick={() => save()}>Save Department</Button>
      </h3>
      
    </div>
  )
}
