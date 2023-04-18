import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import axios from "axios";

import { useLocalState } from "../utilities/useLocalStorage";

export default function Categories() {
  const [jwt, setjwt] = useLocalState("", "jwt");
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8080/api/employee", {
      headers: {
        
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(function (response)  {
        if (response.status === 200) {
          setemployees(response.data)
                    
        };
      }).catch(function (error) {         
        console.log(error.message + "useeffect error");
      });
      
  },[] );

  function addEmployee() {
    // console.log("function")
    // fetch("http://localhost:8080/api/employee", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${jwt}`,
    //   },
    //   method: "POST",
    // })
    //   .then((response) => {
    //     if (response.status === 200) return response.json();
    //   })
    //   .then((employee) => {
       window.location.href = `/dashboard/employee/add`;
    //   });
  }
  function changeToGetEmployee(){
   // employees ? employees.map((employee) => <div>employee.id</div>) : <></>
    window.location.href = `/dashboard/employee`
  }
  return (
    <div>
      {/* {employees ? employees.map((employee) => <div>employee.id</div>) : <></>} */}
      <Menu pointing vertical>
        <Menu.Item name="GET" onClick={() => changeToGetEmployee()}/>
        <Menu.Item name="ADD" onClick={() => addEmployee()} />
        <Menu.Item name="PUT" />
        <Menu.Item name="DELETE" />
      </Menu>
    </div>
  );
}
