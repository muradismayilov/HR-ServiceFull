import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Container, Divider, Form, GridRow,GridColumn} from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";
import MITextInput from "../utilities/MITextInput";
import { useLocalState } from "../utilities/useLocalStorage";
import * as Yup from "yup";

export default function Login() {
  const [jwt, setjwt] = useLocalState("", "jwt");  
  let empService = new EmployeeService()
  const [username, setusername] = useState([])
  const [password, setpassword] = useState([])

  const initialValues = { username: "", password: "" };
  const schema = Yup.object({
    username: Yup.string().required("Girmek mecburidi"),
    password: Yup.string().required("Girmek mecburidi"),
   
  });
  

  function sendLoginRequest() {
  
  
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
    // <div>
    //   <GridRow centered>
    //   <GridColumn width={6}>
    //     <Form>
    //       <Form.Field inline>
    //         <input type="username" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)} />
    //       </Form.Field>
    //       <Divider />

    //       <Form.Field inline>
    //         <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    //       </Form.Field>
    //     </Form>
    //     <Button basic color="green" onClick={() => sendLoginRequest()}>
    //       Login
    //     </Button>
    //     </GridColumn>
    //     </GridRow>
    
    //     </div>
   <Container>
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
      </Container>
  );
}
