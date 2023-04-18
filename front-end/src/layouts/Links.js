import React from 'react'

import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownDivider } from "semantic-ui-react";

export default function Links() {

  
  return (
    <div>
        <Dropdown item text="Secimler">
        <Dropdown.Menu>
          
          <Dropdown.Item as = {NavLink} to="/dashboard" >
               Employee
              </Dropdown.Item>
          
          <DropdownDivider/>
          <Dropdown.Item as = {NavLink} to="/dashboardjob" >Jobs</Dropdown.Item> 
          <DropdownDivider/>
          <Dropdown.Item as = {NavLink} to="/dashboarddep" >Department</Dropdown.Item> 
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
