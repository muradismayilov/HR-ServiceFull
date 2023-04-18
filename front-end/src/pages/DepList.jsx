import React, { useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useState } from "react";
import { useLocalState } from "../utilities/useLocalStorage";
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


export default function DepList() {

const [dep, setdep] = useState([])
const [jwt, setjwt] = useLocalState("", "jwt");

useEffect(() => {
    
  let employeeService = new EmployeeService();
  employeeService.getDep(jwt).then(function (res) {
    if (res.status===200){
    
      setdep(res.data)    
      
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
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Code</Table.HeaderCell>          
             </Table.Row>
        </Table.Header>

        { <Table.Body>
          {dep.map((d,index) => (
            <Table.Row key={index}>
              <Table.Cell><Link to = {`dashboarddep/dep/${d.id}`}>{d.id}</Link> </Table.Cell>
              <Table.Cell>{d.name}</Table.Cell>
              <Table.Cell>{d.code}</Table.Cell>                 
              
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
