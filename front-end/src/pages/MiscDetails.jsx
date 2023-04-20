import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function MiscDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [misc, setmisc] = useState({
    id: "",    
    name: "",
    surname:"",
    username:"",
    indate:"",
    outdate:"",
    jobName:"",
    departmentName: "",
    jobId:""
  });
  let employeeService = new EmployeeService();

  function updateMisc(prop, value) {
    const newmisc = { ...misc };
    newmisc[prop] = value;
    setmisc(newmisc);
  }
  function save() {
    employeeService.updateMisc(jwt, misc);
  }

  function deleteMisc() {
    employeeService.deleteMisc(jwt, id);
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
        ID:{" "}
        <input
          type="id"
          id="id"
          onChange={(e) => updateMisc("id", e.target.value)}
          value={misc.id}
        />
      </h3>
      
      <h3>
        name:{" "}
        <input
          type="name"
          id="name"
          onChange={(e) => updateMisc("name", e.target.value)}
          value={misc.name}
        />
      </h3>
      <h3>
        surname:{" "}
        <input
          type="surname"
          id="surname"
          onChange={(e) => updateMisc("surname", e.target.value)}
          value={misc.surname}
        />
      </h3>
      <h3>
        username:{" "}
        <input
          type="username"
          id="username"
          onChange={(e) => updateMisc("username", e.target.value)}
          value={misc.username}
        />
      </h3>
      <h3>
        indate:{" "}
        <input
          type="indate"
          id="indate"
          onChange={(e) => updateMisc("indate", e.target.value)}
          value={misc.indate}
        />
      </h3>
      <h3>
         outdate:{" "}
        <input
          type="outdate"
          id="outdate"
          onChange={(e) => updateMisc("outdate", e.target.value)}
          value={misc.outdate}
        />
      </h3>
      <h3>
        jobName:{" "}
        <input
          type="jobName"
          id="jobName"
          onChange={(e) => updateMisc("jobName", e.target.value)}
          value={misc.jobName}
        />
      </h3>
      <h3>
       departmentName:{" "}
        <input
          type="departmentName"
          id="departmentName"
          onChange={(e) => updateMisc("departmentName", e.target.value)}
          value={misc.departmentName}
        />
      </h3>
      <h3>
       jobId:{" "}
        <input
          type="jobId"
          id="jobId"
          onChange={(e) => updateMisc("jobId", e.target.value)}
          value={misc.jobId}
        />
      </h3>
      
      
      <h3>
        <Button onClick={() => save()}>Submit </Button>
      </h3>
      <h3>
        <Button onClick={() => deleteMisc()}>Delete </Button>
      </h3>
    </div>
  )
}
