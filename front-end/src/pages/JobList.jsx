import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useState } from "react";
import { useLocalState } from "../utilities/useLocalStorage";
import EmployeeService from '../services/EmployeeService';

export default function JobList() {
const [job, setjob] = useState([])
const [jwt, setjwt] = useLocalState("", "jwt");

useEffect(() => {
    
  let employeeService = new EmployeeService();
  employeeService.getJob(jwt).then(function (res) {
    if (res.status===200){
    
      setjob(res.data)    
      
    }
    
    
    
}).catch(function (error) {         
  console.log(error.message);
});
});


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Code</Table.HeaderCell> 
            <Table.HeaderCell>Ad</Table.HeaderCell>
                     
            <Table.HeaderCell>Department Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        { <Table.Body>
          {job.map((j,index) => (
            <Table.Row key={index}>
              <Table.Cell><Link to = {`dashboardjob/job/${j.id}`}>{j.id}</Link> </Table.Cell>
              <Table.Cell>{j.code}</Table.Cell>  
              <Table.Cell>{j.name}</Table.Cell>
                             
              <Table.Cell>{j.departmentName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body> }

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
