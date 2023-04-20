import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";

import { Button } from "semantic-ui-react";
export default function JobDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [job, setjob] = useState({
    id: "",
    code: "",
    name: "",
    manager:"",
    vacancy:"",
    departmentName: "",
  });
  let employeeService = new EmployeeService();

  function updateJob(prop, value) {
    const newjob = { ...job };
    newjob[prop] = value;
    setjob(newjob);
  }
  function save() {
    employeeService.updateJob(jwt, job);
  }

  function deleteJob() {
    employeeService.deleteJob(jwt, id);
  }

  useEffect(() => {
    employeeService
      .getJobById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setjob(res.data);
        }
      })
      .catch(function (error) {
        console.log(job.manager);
      });
  }, [id]);

  return (
    <div>
      <h1>
        Job id: {job.id} Job code:{job.code} Job name:
        {job.name} Job manager: {job.manager} Vacancy: {job.vacancy} Department name:{" "}
        {job.departmentName}
      </h1>

      <h3>
        ID:{" "}
        <input
          type="id"
          id="id"
          onChange={(e) => updateJob("id", e.target.value)}
          value={job.id}
        />
      </h3>
      <h3>
        CODE:{" "}
        <input
          type="code"
          id="code"
          onChange={(e) => updateJob("code", e.target.value)}
          value={job.code}
        />
      </h3>
      <h3>
        Job name:{" "}
        <input
          type="name"
          id="name"
          onChange={(e) => updateJob("name", e.target.value)}
          value={job.name}
        />
      </h3>
      <h3>
        Manager:{" "}
        <input
          type="manager"
          id="manager"
          onChange={(e) => updateJob("manager", e.target.value)}
          value={job.manager}
        />
      </h3>
      <h3>
        Vacancy:{" "}
        <input
          type="vacancy"
          id="vacancy"
          onChange={(e) => updateJob("vacancy", e.target.value)}
          value={job.vacancy}
        />
      </h3>
      <h3>
        Department id:{" "}
        <input
          type="departmentId"
          id="departmentId"
          onChange={(e) => updateJob("departmentId", e.target.value)}
          value={job.departmentId}
        />
      </h3>
      <h3>
        <Button onClick={() => save()}>Submit Job</Button>
      </h3>
      <h3>
        <Button onClick={() => deleteJob()}>Delete Job</Button>
      </h3>
    </div>
  );
}
