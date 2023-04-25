import React, {  useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function AddMisc() {


  const [jwt, setjwt] = useLocalState("", "jwt");
  const [misc, setmisc] = useState({
      
    
    username:"",
    indate:"",
    outdate:"",
    
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
  

  return (

<Container className="mt-5">
    <Row>
<Col>
<Form.Group className="mb-3" controlId="formBasicEmail">

<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" size="lg" value={misc.username} onChange={(e) => updateMisc("username", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> indate</Form.Label>
        <Form.Control type="indate" placeholder="Enter indate" size="lg" value={misc.indate} onChange={(e) => updateMisc("indate", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> outdate</Form.Label>
        <Form.Control type="outdate" placeholder="Enter outdate" size="lg" value={misc.outdate} onChange={(e) => updateMisc("outdate", e.target.value)}/>
    
  </Col>
</Row>


</Form.Group>

<Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Misc
      </Button>     
        </Col>
        </Row>   
</Col>
</Row>
</Container>



    
  )
}
