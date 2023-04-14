import axios from "axios";

export default class EmployeeService {
    getEmployees(){
        return axios.get("http://localhost:8080/api/employee/")
    }
    getEmployeeById(id){
        return axios.get("http://localhost:8080/api/employee/id"+id)
    }
    getAccess(){
        return axios.post("http://localhost:8080/login/auth", {
            username: "ahmed",
             password: "1234"
          })

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

}