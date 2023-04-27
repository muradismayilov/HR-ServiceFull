import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

export default function MiscDetails() {
  let { id } = useParams();
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [misc, setmisc] = useState({
    id: "",    
    name: "",
    surname:"",
    username:"",
    indate:"",
    outdate:"",
    jobName:"",
    departmentName: "",
    jobId:""
  });
  let employeeService = new EmployeeService();

  function updateMisc(prop, value) {
    const newmisc = { ...misc };
    newmisc[prop] = value;
    setmisc(newmisc);
  }
  function save() {
    employeeService.updateMisc(jwt, misc).then(res=>{
     
      if(res.status===200){
        alert("Updated")
      }
    });
  }

  function deleteMisc() {
    employeeService.deleteMisc(id, jwt);
    alert("Deleted")
  }

  useEffect(() => {
    employeeService
      .getMiscById(id, jwt)
      .then(function (res) {
        if (res.status === 200) {
          setmisc(res.data);
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
        <Form.Control type="id" placeholder="Enter id" size="lg" value={misc.id} onChange={(e) => updateMisc("id", e.target.value)}/>
    
  </Col>
</Row >

<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> name</Form.Label>
        <Form.Control type="name" placeholder="Enter  name" size="lg" value={misc.name} onChange={(e) => updateMisc("name", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> surname</Form.Label>
        <Form.Control type="surname" placeholder="Enter surname" size="lg" value={misc.surname} onChange={(e) => updateMisc("surname", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" size="lg" value={misc.username} onChange={(e) => updateMisc("username", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> indate</Form.Label>
        
        <Form.Control type="date" size="lg" value={misc.indate} onChange={(e) => updateMisc("indate", e.target.value)}/>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> outdate</Form.Label>
       
        <Form.Control type="date" size="lg" value={misc.outdate} onChange={(e) => updateMisc("outdate", e.target.value)}/>
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> jobName</Form.Label>
        <Form.Control type="jobName" placeholder="Enter jobName" size="lg" value={misc.jobName} onChange={(e) => updateMisc("jobName", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> departmentName</Form.Label>
        <Form.Control type="departmentName" placeholder="Enter departmentName" size="lg" value={misc.departmentName} onChange={(e) => updateMisc("departmentName", e.target.value)}/>
    
  </Col>
</Row>
<Row className="justify-content-center align-items-center">
  <Col md = "8" lg = "6">
  <Form.Label className="fs-4"> jobId</Form.Label>
        <Form.Control type="jobId" placeholder="Enter jobId" size="lg" value={misc.jobId} onChange={(e) => updateMisc("jobId", e.target.value)}/>
    
  </Col>
</Row>

</Form.Group>

<Row className="justify-content-center align-items-center">
        <Col className="mt-2 d-flex flex-column gap-5 flez-md-row justify-content-md-between" md = "8" lg = "6">
        <Button variant="primary" type="submit" size="lg"  onClick={() => save()}>
        Submit Misc
      </Button>

      <Button variant="primary" type="signup" size="lg" className="mt-2"  onClick={() => deleteMisc()}>
        Delete Misc
      </Button>

        </Col>
        </Row>   
</Col>
</Row>
</Container>


    // <div>
    //   <h1>
    //     Misc id: {misc.id} 
    //   </h1>

    //   <h3>
    //     ID:{" "}
    //     <input
    //       type="id"
    //       id="id"
    //       onChange={(e) => updateMisc("id", e.target.value)}
    //       value={misc.id}
    //     />
    //   </h3>
      
    //   <h3>
    //     name:{" "}
    //     <input
    //       type="name"
    //       id="name"
    //       onChange={(e) => updateMisc("name", e.target.value)}
    //       value={misc.name}
    //     />
    //   </h3>
    //   <h3>
    //     surname:{" "}
    //     <input
    //       type="surname"
    //       id="surname"
    //       onChange={(e) => updateMisc("surname", e.target.value)}
    //       value={misc.surname}
    //     />
    //   </h3>
    //   <h3>
    //     username:{" "}
    //     <input
    //       type="username"
    //       id="username"
    //       onChange={(e) => updateMisc("username", e.target.value)}
    //       value={misc.username}
    //     />
    //   </h3>
    //   <h3>
    //     indate:{" "}
    //     <input
    //       type="indate"
    //       id="indate"
    //       onChange={(e) => updateMisc("indate", e.target.value)}
    //       value={misc.indate}
    //     />
    //   </h3>
    //   <h3>
    //      outdate:{" "}
    //     <input
    //       type="outdate"
    //       id="outdate"
    //       onChange={(e) => updateMisc("outdate", e.target.value)}
    //       value={misc.outdate}
    //     />
    //   </h3>
    //   <h3>
    //     jobName:{" "}
    //     <input
    //       type="jobName"
    //       id="jobName"
    //       onChange={(e) => updateMisc("jobName", e.target.value)}
    //       value={misc.jobName}
    //     />
    //   </h3>
    //   <h3>
    //    departmentName:{" "}
    //     <input
    //       type="departmentName"
    //       id="departmentName"
    //       onChange={(e) => updateMisc("departmentName", e.target.value)}
    //       value={misc.departmentName}
    //     />
    //   </h3>
    //   <h3>
    //    jobId:{" "}
    //     <input
    //       type="jobId"
    //       id="jobId"
    //       onChange={(e) => updateMisc("jobId", e.target.value)}
    //       value={misc.jobId}
    //     />
    //   </h3>
      
      
    //   <h3>
    //     <Button onClick={() => save()}>Submit </Button>
    //   </h3>
    //   <h3>
    //     <Button onClick={() => deleteMisc()}>Delete </Button>
    //   </h3>
    // </div>
  )
}
