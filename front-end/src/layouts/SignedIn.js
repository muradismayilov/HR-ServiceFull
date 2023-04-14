import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        {/* <Image
          avatar
          spaced="right"
          src="https://images.app.goo.gl/Lt99ebrkKydGd8MZ9"
        /> */}
        <Dropdown pointing="top left" text = "Murad">
          <Dropdown.Menu>
            <Dropdown.Item text="My profile" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Signout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
