import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";
import Links from "./Links";


import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
 let employeeService = new EmployeeService()
 const [jwt, setjwt] = useLocalState("", "jwt");
  
  function handleSignOut() {
  setjwt("")
  setIsAuthenticated(false) 
   window.location.href = `/login`
    
  }
  function handleSignIn() {
  setIsAuthenticated(true)
    //window.location.href = `/login`
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          

          <Menu.Menu position="right">
            <Links />
            {isAuthenticated ? <SignedIn signOut = {handleSignOut} /> : <SignedOut signIn = {handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
