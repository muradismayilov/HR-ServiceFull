import axios from "axios";

export default class EmployeeService {
  
  getEmployeeById(id,jwt) {
    return axios.get("http://localhost:8080/api/employee/" + id, {
      headers: {        
        Authorization: `Bearer ` + jwt,
      },
    }
    
    );
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

    //         const reqBody = {
    //       username: "ahmed",
    //        password: "1234",
    //          };

    //    return fetch("http://localhost:8080/login/auth", {
    //       headers: {
    //         "Content-Type": "application/json",
    //        },
    //       method: "post",
    //        body: JSON.stringify(reqBody),
    //      })
  }

  getJob(jwt){
    return axios.get("http://localhost:8080/api/job", {
      headers: {        
        Authorization: `Bearer ` + jwt,
      },
    });

  }
  getDep(jwt){
    return axios.get("http://localhost:8080/api/department", {
      headers: {        
        Authorization: `Bearer ` + jwt,
      },
    });
  }



  
}
