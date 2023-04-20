import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function MiscList() {
const [misc, setmisc] = useState([])
const [jwt, setjwt] = useLocalState("", "jwt");

useEffect(() => {
    
  let employeeService = new EmployeeService();
  employeeService.getMisc(jwt).then(function (res) {
    if (res.status===200){
    
      setmisc(res.data)    
      
    }
    
    
    
}).catch(function (error) {         
  console.log(error.message);
});
},[]);


  return (
    <div>
      
      <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>        
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Istifadeci adi</Table.HeaderCell>
            <Table.HeaderCell>Indate</Table.HeaderCell>
            <Table.HeaderCell>Outdate</Table.HeaderCell>
             <Table.HeaderCell>Job Name</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        { <Table.Body>
          {misc.map((m,index) => (
            <Table.Row key={index}>
              <Table.Cell><Link to = {`/dashboardmisc/misc/${m.id}`}>{m.id}</Link> </Table.Cell>
               
              <Table.Cell>{m.name}</Table.Cell>
              <Table.Cell>{m.surname}</Table.Cell>  
              <Table.Cell>{m.username}</Table.Cell>   
              <Table.Cell>{m.indate}</Table.Cell>  
              <Table.Cell>{m.outdate}</Table.Cell> 
              <Table.Cell>{m.jobName}</Table.Cell>
              <Table.Cell>{m.departmentName}</Table.Cell>
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
