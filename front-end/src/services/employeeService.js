import axios from "axios";

export default class EmployeeService {
  getEmployeeById(id, jwt) {
    return axios.get("http://localhost:8080/api/employee/" + id, {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getDepartmentById(id, jwt) {
    return axios.get("http://localhost:8080/api/department/" + id, {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getJobById(id, jwt) {
    return axios.get("http://localhost:8080/api/job/" + id, {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getMiscById(id, jwt) {
    return axios.get("http://localhost:8080/api/misc/" + id, {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }

  updateDepartment(jwt, dep) {
    return axios({
      method: "put",
      url: "http://localhost:8080/api/department",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        id: dep.id,
        code: dep.code,
        name: dep.name,
      },
    });
  }
  addDepartment(jwt,dep) {
    return axios({
      method: "post",
      url: "http://localhost:8080/api/department",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {       
        code: dep.code,
        name: dep.name,
      },
    });
  }

  updateJob(jwt, job) {
    return axios({
      method: "put",
      url: "http://localhost:8080/api/job",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        id: job.id,
        code: job.code,
        name: job.name,
        manager: job.manager,
        vacancy:job.vacancy,
        departmentId: job.departmentId,
      },
    });
  }
  addJob(jwt, job) {
    return axios({
      method: "put",
      url: "http://localhost:8080/api/job",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        
        code: job.code,
        name: job.name,
        manager: job.manager,
        vacancy:job.vacancy,
        departmentId: job.departmentId,
      },
    });
  }
  updateEmployee(jwt,employee) {
    return axios({
      method: "put",
      url: "http://localhost:8080/api/employee",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        id: employee.id,
        name: employee.name,
        surname: employee.surname,
        fathername: employee.fathername,
        username:employee.username,
        gender:employee.gender,
        birthdate:employee.birthdate,
        workstatus:employee.workstatus,
        director:employee.director,
        registerdate:employee.registerdate,
        password:employee.password,
        passchangedate:employee.passchangedate,
        jobId:employee.jobId
      },
    });
  }
  addEmployee(jwt,employee) {
    return axios({
      method: "post",
      url: "http://localhost:8080/api/employee",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        
        name: employee.name,
        surname: employee.surname,
        fathername: employee.fathername,
        username:employee.username,
        gender:employee.gender,
        birthdate:employee.birthdate,
        workstatus:employee.workstatus,
        director:employee.director,
        registerdate:employee.registerdate,
        password:employee.password,
        passchangedate:employee.passchangedate,
        jobId:employee.jobId
      },
    });
  }

  updateMisc(jwt,misc) {
    return axios({
      method: "put",
      url: "http://localhost:8080/api/misc/"+misc.username,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        id:misc.id,
        name:misc.name,
        surname:misc.surname,
        username:misc.username,                
        indate:misc.indate,
        outdate:misc.outdate,
        jobId:misc.jobId
        
      },
    });
  }
  addMisc(jwt,misc) {
    return axios({
      method: "post",
      url: "http://localhost:8080/api/misc/"+misc.username,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
      data: {
        
       
        indate:misc.indate,
        outdate:misc.outdate,
        jobId:misc.jobId
        
        
      },
    });
  }
  getEmployee(jwt) {
    return axios.get("http://localhost:8080/api/employee", {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getAccess(username, password) {
    return axios.post("http://localhost:8080/login/auth", {
      username: username,
      password: password,
    });
  }
  signUp(name,username, password) {
    return axios.post("http://localhost:8080/login/save", {
      name:name,
      username: username,
      password: password,
    });
  }
  tokenControl(jwt,user) {
    return axios.post(`http://localhost:8080/login/validate?token=${jwt}&&username=${user}` );

    
  }

  logout(jwt){
    return axios({
      method: "post",
      url: "http://localhost:8080/logout",
      headers: {
        Authorization: `Bearer ` + jwt,
      },
})
  }

  getJob(jwt) {
    return axios.get("http://localhost:8080/api/job", {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getDep(jwt) {
    return axios.get("http://localhost:8080/api/department", {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  getMisc(jwt) {
    return axios.get("http://localhost:8080/api/misc", {
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }

  deleteJob(jwt, id) {
    return axios({
      method: "delete",
      url: "http://localhost:8080/api/job/" + id,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  deleteDepartment(id, jwt) {
    return axios({
      method: "delete",
      url: "http://localhost:8080/api/department/" + id,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  deleteEmployee(id, jwt) {
    return axios({
      method: "delete",
      url: "http://localhost:8080/api/employee/" + id,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
  deleteMisc(id, jwt) {
    return axios({
      method: "delete",
      url: "http://localhost:8080/api/misc/" + id,
      headers: {
        Authorization: `Bearer ` + jwt,
      },
    });
  }
}
