import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';

import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';



export default function JobAdd() {
  const [jwt, setjwt] = useLocalState("", "jwt");  
  let employeeService = new EmployeeService();
  const [job, setjob] = useState({
    id: "",
    code: "",
    name: "",
    manager:false,
    vacancy:"",
    departmentName: "",
    departmentId:""
  });
  
  function updateJob(prop, value) {
    const newjob = { ...job };
    newjob[prop] = value;
    setjob(newjob);
  }
  function save() {
    employeeService.addJob(jwt, job).then(res=>{
     
      if(res.status===201){
        alert("Job added")
      }
    })         ;
  }
  
  return (

    <Container className="mt-5">
    <Row>
<Col>
<Form.Group className="mb-3" controlId="formBasicEmail">

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
   {/* <Form.Label className="fs-4">Manager or not </Form.Label>
        <Form.Control type="manager" placeholder="Enter manager or not" size="lg" value={job.manager} onChange={(e) => updateJob("manager", e.target.value)}/>  */}

<Form.Label className="fs-4">Manager or not </Form.Label>
       <div>
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
        Add Job
      </Button>   

        </Col>
        </Row>   
  </Col>
  </Row>
  </Container>




    // <div>
    //   <h1>
    //     Job id: {job.id} Job code:{job.code} Job name:
    //     {job.name} Job manager: {job.manager} Vacancy: {job.vacancy} Department name:{" "}
    //     {job.departmentName}
    //   </h1>

      
    //   <h3>
    //     CODE:{" "}
    //     <input
    //       type="code"
    //       id="code"
    //       onChange={(e) => updateJob("code", e.target.value)}
    //       value={job.code}
    //     />
    //   </h3>
    //   <h3>
    //     Job name:{" "}
    //     <input
    //       type="name"
    //       id="name"
    //       onChange={(e) => updateJob("name", e.target.value)}
    //       value={job.name}
    //     />
    //   </h3>
    //   <h3>
    //     Manager:{" "}
    //     <input
    //       type="manager"
    //       id="manager"
    //       onChange={(e) => updateJob("manager", e.target.value)}
    //       value={job.manager}
    //     />
    //   </h3>
    //   <h3>
    //     Vacancy:{" "}
    //     <input
    //       type="vacancy"
    //       id="vacancy"
    //       onChange={(e) => updateJob("vacancy", e.target.value)}
    //       value={job.vacancy}
    //     />
    //   </h3>
    //   <h3>
    //     Department id:{" "}
    //     <input
    //       type="departmentId"
    //       id="departmentId"
    //       onChange={(e) => updateJob("departmentId", e.target.value)}
    //       value={job.departmentId}
    //     />
    //   </h3>
    //   <h3>
    //     <Button onClick={() => save()}>Add Job</Button>
    //   </h3>
      
    // </div>
  )
}
