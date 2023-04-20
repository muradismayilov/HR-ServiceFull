import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function AddMisc() {

  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [misc, setmisc] = useState({
      
    name: "",
    surname:"",
    username:"",
    indate:"",
    outdate:"",
    jobName:"",
    departmentName: "",
  });
  let employeeService = new EmployeeService();

  function updateMisc(prop, value) {
    const newmisc = { ...misc };
    newmisc[prop] = value;
    setmisc(newmisc);
  }
  function save() {
    employeeService.addMisc(jwt, misc);
  }
  useEffect(() => {
    employeeService
      .getMiscById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setmisc(res.data);
        }
      })
      .catch(function (error) {
        
      });
  }, [id]);



  return (
    <div>
      <h1>
        Misc id: {misc.id} 
      </h1>

      
      
      <h3>
        Misc name:{" "}
        <input
          type="name"
          id="name"
          onChange={(e) => updateMisc("name", e.target.value)}
          value={misc.name}
        />
      </h3>
      <h3>
        Misc surnaname:{" "}
        <input
          type="surname"
          id="surname"
          onChange={(e) => updateMisc("surname", e.target.value)}
          value={misc.surname}
        />
      </h3>
      <h3>
        Misc username:{" "}
        <input
          type="username"
          id="username"
          onChange={(e) => updateMisc("username", e.target.value)}
          value={misc.username}
        />
      </h3>
      <h3>
        Misc indate:{" "}
        <input
          type="indate"
          id="indate"
          onChange={(e) => updateMisc("indate", e.target.value)}
          value={misc.indate}
        />
      </h3>
      <h3>
        Misc outdate:{" "}
        <input
          type="outdate"
          id="outdate"
          onChange={(e) => updateMisc("outdate", e.target.value)}
          value={misc.outdate}
        />
      </h3>
      <h3>
        Misc jobName:{" "}
        <input
          type="jobName"
          id="jobName"
          onChange={(e) => updateMisc("jobName", e.target.value)}
          value={misc.jobName}
        />
      </h3>
      <h3>
        Misc departmentName:{" "}
        <input
          type="departmentName"
          id="departmentName"
          onChange={(e) => updateMisc("departmentName", e.target.value)}
          value={misc.departmentName}
        />
      </h3>
      
      
      <h3>
        <Button onClick={() => save()}>Submit </Button>
      </h3>
      
    </div>
  )
}
