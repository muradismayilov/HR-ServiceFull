import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useLocalState } from "../utilities/useLocalStorage";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function EmployeeDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [employee, setemployee] = useState({
    id: "",
    name: "",
    surname: "",
    fathername: "",
    username: "",
    gender: "",
    birthdate: "",
    workstatus: "",
    director: "",
    registerdate: "",
   
    passchangedate: "",
    jobId: "",
  });
  let employeeService = new EmployeeService();

  function updateEmployee(prop, value) {
    const newemployee = { ...employee };
    newemployee[prop] = value;
    setemployee(newemployee);
  }

  function save() {
    employeeService.updateEmployee(jwt, employee);
    alert("added")
  }

  function deleteEmployee() {
    employeeService.deleteEmployee(id, jwt);
    alert("deleted")
  }

  useEffect(() => {
    employeeService
      .getEmployeeById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setemployee(res.data);
        }
      })
      .catch(function (error) {
        console.log(error.message);
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
        <Form.Control type="id" placeholder="Enter id" size="lg" value={employee.id} onChange={(e) => updateEmployee("id", e.target.value)}/>
    
  </Col>
</Row >

<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee name</Form.Label>
        <Form.Control type="name" placeholder="Enter employee name" size="lg" value={employee.name} onChange={(e) => updateEmployee("name", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee surname</Form.Label>
        <Form.Control type="surname" placeholder="Enter employee surname" size="lg" value={employee.surname} onChange={(e) => updateEmployee("surname", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee fathername</Form.Label>
        <Form.Control type="fathername" placeholder="Enter employee fathername" size="lg" value={employee.fathername} onChange={(e) => updateEmployee("fathername", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee username</Form.Label>
        <Form.Control type="username" placeholder="Enter employee username" size="lg" value={employee.username} onChange={(e) => updateEmployee("username", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee gender</Form.Label>
        <Form.Control type="gender" placeholder="Enter employee gender" size="lg" value={employee.gender} onChange={(e) => updateEmployee("gender", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee birthdate</Form.Label>
        <Form.Control type="birthdate" placeholder="Enter employee birthdate" size="lg" value={employee.birthdate} onChange={(e) => updateEmployee("birthdate", e.target.value)}/>
        <Form.Control type="date" size="lg" value={employee.birthdate} onChange={(e) => updateEmployee("birthdate", e.target.value)}/>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee workstatus</Form.Label>
        <Form.Control type="workstatus" placeholder="Enter employee workstatus" size="lg" value={employee.workstatus} onChange={(e) => updateEmployee("workstatus", e.target.value)}/>
        <div>
       <Form.Check
            inline
            label="Working"
            name="group1"
            type={'radio'}
            value={employee.workstatus} onChange={(e) => updateEmployee("workstatus", e.target.value)}
          />
          <Form.Check
            inline
            label="Not Working"
            name="group1"
            type={'radio'}
            value={!employee.workstatus} onChange={(e) => updateEmployee("workstatus", e.target.value)}
          />

       </div>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee director</Form.Label>
        <Form.Control type="director" placeholder="Enter employee director" size="lg" value={employee.director} onChange={(e) => updateEmployee("director", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee registerdate</Form.Label>
        <Form.Control type="registerdate" placeholder="Enter employee registerdate" size="lg" value={employee.registerdate} onChange={(e) => updateEmployee("registerdate", e.target.value)}/>
        <Form.Control type="date" size="lg" value={employee.registerdate} onChange={(e) => updateEmployee("registerdate", e.target.value)}/>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee password</Form.Label>
        <Form.Control type="password" placeholder="Enter employee password" size="lg" value={employee.password} onChange={(e) => updateEmployee("password", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee passchangedate</Form.Label>
        <Form.Control type="passchangedate" placeholder="Enter employee passchangedate" size="lg" value={employee.passchangedate} onChange={(e) => updateEmployee("passchangedate", e.target.value)}/>
        <Form.Control type="date" size="lg" value={employee.passchangedate} onChange={(e) => updateEmployee("passchangedate", e.target.value)}/>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4">Employee jobId</Form.Label>
        <Form.Control type="jobId" placeholder="Enter employee jobId" size="lg" value={employee.jobId} onChange={(e) => updateEmployee("jobId", e.target.value)}/>
    
  </Col>
</Row>
</Form.Group>

<Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Employee
      </Button>

      <Button variant="primary" type="signup" size="lg" className="mt-2"  onClick={() => deleteEmployee()}>
        Delete Employee
      </Button>

        </Col>
        </Row>   
</Col>
</Row>
</Container>



    // <div>
    //   <h1>
    //     employee id: {employee.id} employee name:
    //     {employee.name}
    //   </h1>

    //   <h3>
    //     ID:{" "}
    //     <input
    //       type="id"
    //       id="id"
    //       onChange={(e) => updateEmployee("id", e.target.value)}
    //       value={employee.id}
    //     />
    //   </h3>

    //   <h3>
    //     employee name:{" "}
    //     <input
    //       type="name"
    //       id="name"
    //       onChange={(e) => updateEmployee("name", e.target.value)}
    //       value={employee.name}
    //     />
    //   </h3>
    //   <h3>
    //     employee surname:{" "}
    //     <input
    //       type="surname"
    //       id="surname"
    //       onChange={(e) => updateEmployee("surname", e.target.value)}
    //       value={employee.surname}
    //     />
    //   </h3>
    //   <h3>
    //     employee fathername:{" "}
    //     <input
    //       type="fathername"
    //       id="fathername"
    //       onChange={(e) => updateEmployee("fathername", e.target.value)}
    //       value={employee.fathername}
    //     />
    //   </h3>
    //   <h3>
    //     employee username:{" "}
    //     <input
    //       type="username"
    //       id="username"
    //       onChange={(e) => updateEmployee("username", e.target.value)}
    //       value={employee.username}
    //     />
    //   </h3>
    //   <h3>
    //     employee gender:{" "}
    //     <input
    //       type="gender"
    //       id="gender"
    //       onChange={(e) => updateEmployee("gender", e.target.value)}
    //       value={employee.gender}
    //     />
    //   </h3>
    //   <h3>
    //     employee birthdate:{" "}
    //     <input
    //       type="birthdate"
    //       id="birthdate"
    //       onChange={(e) => updateEmployee("birthdate", e.target.value)}
    //       value={employee.birthdate}
    //     />
    //   </h3>
    //   <h3>
    //     employee workstatus:{" "}
    //     <input
    //       type="workstatus"
    //       id="workstatus"
    //       onChange={(e) => updateEmployee("workstatus", e.target.value)}
    //       value={employee.workstatus}
    //     />
    //   </h3>
    //   <h3>
    //     employee director:{" "}
    //     <input
    //       type="director"
    //       id="director"
    //       onChange={(e) => updateEmployee("director", e.target.value)}
    //       value={employee.director}
    //     />
    //   </h3>
    //   <h3>
    //     employee registerdate:{" "}
    //     <input
    //       type="registerdate"
    //       id="registerdate"
    //       onChange={(e) => updateEmployee("registerdate", e.target.value)}
    //       value={employee.registerdate}
    //     />
    //   </h3>
    //   <h3>
    //     employee password:{" "}
    //     <input
    //       type="password"
    //       id="password"
    //       onChange={(e) => updateEmployee("password", e.target.value)}
    //       value={employee.password}
    //     />
    //   </h3>
    //   <h3>
    //     employee passchangedate:{" "}
    //     <input
    //       type="passchangedate"
    //       id="passchangedate"
    //       onChange={(e) => updateEmployee("passchangedate", e.target.value)}
    //       value={employee.passchangedate}
    //     />
    //   </h3>
    //   <h3>
    //     employee jobId:{" "}
    //     <input
    //       type="jobId"
    //       id="jobId"
    //       onChange={(e) => updateEmployee("jobId", e.target.value)}
    //       value={employee.jobId}
    //     />
    //   </h3>

    //   <h3>
    //     <Button onClick={() => save()}>Submit Employee</Button>
    //   </h3>
    //   <h3>
    //     <Button onClick={() => deleteEmployee()}>Delete Employee</Button>
    //   </h3>
    // </div>
  );
}
