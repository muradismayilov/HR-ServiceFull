import React  from "react";
import { Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

export default function Categories() {
  
  
  return (
    <div>
      
      <Menu pointing vertical>
        <Menu.Item name="GET" as={NavLink} to="/dashboard/employee"/>
        <Menu.Item name="ADD" as={NavLink} to="/dashboard/employee/add" />
        <Menu.Item name="PUT" />
        <Menu.Item name="DELETE" />
      </Menu>
    </div>
  );
}
