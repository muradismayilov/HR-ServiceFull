import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";

export default function JobDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [job, setjob] = useState({
    id: "",
    code: "",
    name: "",
    manager:false,
    vacancy:"",
    departmentId:"",
   
  });
  let employeeService = new EmployeeService();

  function updateJob(prop, value) {
    const newjob = { ...job };
    newjob[prop] = value;
    setjob(newjob);
  }
  function save() {
    employeeService.updateJob(jwt, job);
    alert("added")
  }

  function deleteJob() {
    employeeService.deleteJob(jwt, id);
    alert("deleted")
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
       
      });
  }, [id]);

  return (


    <Container className="mt-5">
    <Row>
<Col>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">ID</Form.Label>
        <Form.Control type="id" placeholder="Enter id" size="lg" value={job.id} onChange={(e) => updateJob("id", e.target.value)}/>
    
  </Col>
</Row >
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Job code</Form.Label>
        <Form.Control type="code" placeholder="Enter job code" size="lg" value={job.code} onChange={(e) => updateJob("code", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Job name</Form.Label>
        <Form.Control type="name" placeholder="Enter job name" size="lg" value={job.name} onChange={(e) => updateJob("name", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
   <Form.Label className="fs-4">Manager</Form.Label>
        <Form.Control type="manager" placeholder="Enter manager" size="lg" value={job.manager} onChange={(e) => updateJob("manager", e.target.value)}/> 
        <Form.Label className="fs-4">Manager</Form.Label>

       
        <div  className="mb-3" >
          <Form.Check
            inline
            label="Manager"
            name="group1"
            type={'radio'}
            value={!job.manager} onChange={(e) => updateJob("manager", e.target.value)}
          />
          <Form.Check
            inline
            label="Not Manager"
            name="group1"
            type={'radio'}
            value={job.manager} onChange={(e) => updateJob("manager", e.target.value)}
          />
          
        </div>
      
  </Col>
</Row >
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Vacancy</Form.Label>
        <Form.Control type="vacancy" placeholder="Enter vacancy" size="lg" value={job.vacancy} onChange={(e) => updateJob("vacancy", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Dep Id</Form.Label>
        <Form.Control type="departmentId" placeholder="Enter dep id" size="lg" value={job.departmentId} onChange={(e) => updateJob("departmentId", e.target.value)}/>
    
  </Col>
</Row>

  </Form.Group>

  <Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Job
      </Button>

      <Button variant="primary" type="signup" size="lg" className="mt-2"  onClick={() => deleteJob()}>
        Delete Job
      </Button>

        </Col>
        </Row>   
  </Col>
  </Row>
  </Container>


   
  );
}
