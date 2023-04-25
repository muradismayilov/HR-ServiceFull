
import React, { useState } from "react";

import EmployeeService from "../services/EmployeeService";

import { useLocalState } from "../utilities/useLocalStorage";

import { Col, Container,  NavLink,  Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login() {
  const [jwt, setjwt] = useLocalState("", "jwt");  
  const [user, setuser] = useLocalState("", "user");  
  let empService = new EmployeeService()
  const [username, setusername] = useState([])
  const [password, setpassword] = useState([])


  

  function sendLoginRequest() {
  
    setuser(username)
  
    if (!jwt) {
        
      
         empService.getAccess(username,password)
        .then(function (response) {
          if (response.status===200){
            setjwt(response.data.token);
          window.location.href = "dashboard"

          }
          
        })
        .catch(function (error) {         
          alert(error.message);
        });
    }else window.location.href = "dashboard"
    
  }

  

  return (
 
   <Container className="mt-5">
<Row >
  <Col>
  
      <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={(values)=>{
        console.log(values)
      }}>
        <Row className="justify-content-center align-items-center">
          <Col md = "8" lg = "6">
          <Form.Label className="fs-4">Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" size="lg" value={username} onChange={(e)=>setusername(e.target.value)}/>
          </Col>
        </Row>
        
        <Row className="justify-content-center align-items-center">
          <Col className="mt-4" md = "8" lg = "6" >
          <Form.Label className="fs-4" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" size="lg" className="mt-2" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </Col>
        </Row>
              
        
      </Form.Group>  

      <Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => sendLoginRequest()}>
        Login
      </Button>

      <Button variant="primary" type="signup" size="lg" className="mt-2"  href="/signup">
        Sign Up
      </Button>

        </Col>
        </Row>   
      
        
      
      
  </Col>
</Row>






    {/* <Row>
      <Col>
       <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        <Form className="ui form">
            <MITextInput name = "username" placeholder = "Username" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <MITextInput name = "password" placeholder = "Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <Button color="green"  type="submit" onClick={() => sendLoginRequest()}>Login</Button>
        </Form>
      </Formik>
      </Col>
    </Row> */}
   
      </Container>
  );
}
