import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalState } from "../utilities/useLocalStorage";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function DepDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [dep, setdep] = useState({ id: "", code: "", name: "" });
  let employeeService = new EmployeeService();

  function updateDepartment(prop, value) {
    const newdep = { ...dep };
    newdep[prop] = value;
    setdep(newdep);
  }
  function save() {
    employeeService.updateDepartment(jwt, dep);
    alert("added")
  }

  function deletedep() {
    employeeService.deleteDepartment(id, jwt);
    alert("deleted")
  }

  useEffect(() => {
    employeeService
      .getDepartmentById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setdep(res.data);       
        }
      })
      .catch(function (error) {
       
      });
  }, [id]);

  return (
    
    <Container className="mt-5">
      <Row>
<Col>
<Form.Group className="mb-3" controlId="formBasicEmail">

<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">ID</Form.Label>
        <Form.Control type="id" placeholder="Enter id" size="lg" value={dep.id} onChange={(e) => updateDepartment("id", e.target.value)}/>
    
  </Col>
</Row >
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Dep code</Form.Label>
        <Form.Control type="code" placeholder="Enter dep code" size="lg" value={dep.code} onChange={(e) => updateDepartment("code", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Dep name</Form.Label>
        <Form.Control type="name" placeholder="Enter dep name" size="lg" value={dep.name} onChange={(e) => updateDepartment("name", e.target.value)}/>
    
  </Col>
</Row>
</Form.Group>


<Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Department
      </Button>

      <Button variant="primary" type="signup" size="lg" className="mt-2"  onClick={() => deletedep()}>
        Delete Department
      </Button>

        </Col>
        </Row>   


</Col>

      </Row>
    </Container>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <div>
    //   <h1>
    //     Department id: {dep.id} Department code:{dep.code} Department name:
    //     {dep.name}
    //   </h1>

    //   <h3>
    //     ID:{" "}
    //     <input
    //       type="id"
    //       id="id"
    //       onChange={(e) => updateDepartment("id", e.target.value)}
    //       value={dep.id}
    //     />
    //   </h3>
    //   <h3>
    //     CODE:{" "}
    //     <input
    //       type="code"
    //       id="code"
    //       onChange={(e) => updateDepartment("code", e.target.value)}
    //       value={dep.code}
    //     />
    //   </h3>
    //   <h3>
    //     Department name:{" "}
    //     <input
    //       type="name"
    //       id="name"
    //       onChange={(e) => updateDepartment("name", e.target.value)}
    //       value={dep.name}
    //     />
    //   </h3>
    //   <h3>
    //     <Button onClick={() => save()}>Submit Department</Button>
    //   </h3>
    //   <h3>
    //     <Button onClick={() => deletedep()}>Delete Department</Button>
    //   </h3>
    // </div>
  );
}
