import React from "react";
import { Button, Container, Divider, Form } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";

export default function Login() {
  const [jwt, setjwt] = useLocalState("", "jwt");
  let empService = new EmployeeService()

  function sendLoginRequest() {
    console.log(`sending`);
  
    if (!jwt) {
      
         empService.getAccess()
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
            <input type="text" placeholder="Username" />
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="password" placeholder="Password" />
          </Form.Field>
        </Form>
        <Button basic color="green" onClick={() => sendLoginRequest()}>
          Login
        </Button>
      </Container>
    </div>
  );
}
