import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function SignUp() {

    const [jwt, setjwt] = useLocalState("", "jwt");  
  let empService = new EmployeeService()
  const [name, setname] = useState([])
  const [username, setusername] = useState([])
  const [password, setpassword] = useState([])

  function sendSignUpRequest() {
  
       
      
         empService.signUp(name,username,password)
        .then(function (response) {
          if (response.status===200){
            setjwt(response.data.token);
          window.location.href = "dashboard"

          }
          
        })
        .catch(function (error) {         
          alert(error.message);
        });
    
    
  }

  return (
    <Container className="mt-5">
<Row>
  <Col>
  
      <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={(values)=>{
        console.log(values)
      }}>

        <Row className="justify-content-center align-items-center">
          <Col className="mt-4" md = "8" lg = "6">
          <Form.Label className="fs-4">Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" size="lg" value={name} onChange={(e)=>setname(e.target.value)}/>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col className="mt-4" md = "8" lg = "6">
          <Form.Label className="fs-4">Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" size="lg" value={username} onChange={(e)=>setusername(e.target.value)}/>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col className="mt-4" md = "8" lg = "6">
          <Form.Label className="fs-4" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" size="lg" className="mt-2" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </Col>
        </Row>

               
      </Form.Group>

      <Row className="justify-content-center align-items-center">
          <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
          <Button variant="primary" type="submit" size="lg" className="mt-2" onClick={() => sendSignUpRequest()}>
        Sign UP
      </Button>
      <Button variant="primary" type="signup" size="lg" className="mt-2"  href="/login">
        Login
      </Button>

          </Col>
        </Row>

           
      
     
      
  </Col>
</Row>
</Container>
  )
}
