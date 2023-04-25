import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { useLocalState } from "../utilities/useLocalStorage";

export default function SignedIn(props) {
  const [user, setuser] = useLocalState("", "user");
  return (
    <div>
      <Menu.Item>
        
        <Dropdown pointing="top left" text = {user}>
          <Dropdown.Menu>
            <Dropdown.Item text="My profile" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Signout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
