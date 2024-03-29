import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';
import {NotificationContainer, NotificationManager} from 'react-notifications'


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
 
    employeeService.addDepartment(jwt,dep).then(res=>{
     
      if(res.status===201){
        alert("Department added")
      }
    })         
  }


  return (

    <Container className="mt-5">
    <Row>
<Col>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Dep code</Form.Label>
        <Form.Control type="code" placeholder="Enter dep code" size="lg" value={dep.code} onChange={(e) => updateDepartment("code", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Dep name</Form.Label>
        <Form.Control type="name" placeholder="Enter dep name" size="lg" value={dep.name} onChange={(e) => updateDepartment("name", e.target.value)}/>
    
  </Col>
</Row>
</Form.Group>
<Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Department
      </Button>
     
        </Col>
        </Row>   




</Col>
</Row>
</Container>





   
  )
}
