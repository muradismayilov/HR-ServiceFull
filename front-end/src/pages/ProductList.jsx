import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

export default function ProductList() {
  const [employee, setemployee] = useState([]);
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getEmployees().then((result) =>
      setemployee(result.data.data)
    );
  },[]);
  return <div>
    <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Ata adi</Table.HeaderCell>
            <Table.HeaderCell>Istifadeci adi</Table.HeaderCell>
            <Table.HeaderCell>Cinsiyyeti</Table.HeaderCell>
            <Table.HeaderCell>Dogum tarixi</Table.HeaderCell>
            <Table.HeaderCell>Is Veziyyeti</Table.HeaderCell>
            <Table.HeaderCell>Direktor</Table.HeaderCell>
            <Table.HeaderCell>Register Date</Table.HeaderCell>
            <Table.HeaderCell>Pass Change Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employee.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell><Link to = {`/employee/${employee.id}`}>{employee.name}</Link> </Table.Cell>
              <Table.Cell>{employee.surname}</Table.Cell>
              <Table.Cell>{employee.fathername}</Table.Cell>
              <Table.Cell>{employee.username}</Table.Cell>
              <Table.Cell>{employee.gender}</Table.Cell>
              <Table.Cell>{employee.birthdate}</Table.Cell>
              <Table.Cell>{employee.workstatus}</Table.Cell>
              <Table.Cell>{employee.director}</Table.Cell>
              <Table.Cell>{employee.registerdate}</Table.Cell>
              <Table.Cell>{employee.passchangedate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

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
  </div>;
}
