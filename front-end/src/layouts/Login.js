import React, { useState } from "react";
import { Button, Container, Divider, Form } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";

export default function Login() {
  const [jwt, setjwt] = useLocalState("", "jwt");  
  let empService = new EmployeeService()
  const [username, setusername] = useState([])
  const [password, setpassword] = useState([])
  

  function sendLoginRequest() {
    console.log(`sending`);
  
    if (!jwt) {
        
      
         empService.getAccess(username,password)
        .then(function (response) {
          setjwt(response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    console.log(jwt);
  }
  return (
    <div>
      <Container>
        <Form>
          <Form.Field inline>
            <input type="username" placeholder="Username" value={username} onChange={(event)=>setusername(event.target.value)} />
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="password" placeholder="Password" value={password} onChange={(event)=>setpassword(event.target.value)}/>
          </Form.Field>
        </Form>
        <Button basic color="green" onClick={() => sendLoginRequest()}>
          Login
        </Button>
      </Container>
    
    </div>
  );
}
