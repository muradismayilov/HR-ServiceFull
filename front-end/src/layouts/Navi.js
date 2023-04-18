import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import Links from "./Links";


import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  
  function handleSignOut() {
    setIsAuthenticated(false) 

    
  }
  function handleSignIn() {
    // setIsAuthenticated(true)
    window.location.href = `/login`
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Links />
            {isAuthenticated ? <SignedIn signOut = {handleSignOut} /> : <SignedOut signIn = {handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
