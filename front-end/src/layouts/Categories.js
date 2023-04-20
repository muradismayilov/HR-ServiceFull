import React  from "react";
import { Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

export default function Categories() {
  // const [jwt, setjwt] = useLocalState("", "jwt");
  // const [employees, setemployees] = useState([]);

  // useEffect(() => {
    
  //   axios.get("http://localhost:8080/api/employee", {
  //     headers: {
        
  //       Authorization: `Bearer ${jwt}`
  //     }
  //   })
  //     .then(function (response)  {
  //       if (response.status === 200) {
  //         setemployees(response.data)
                    
  //       };
  //     }).catch(function (error) {         
  //       console.log(error.message + "useeffect error");
  //     });
      
  // },[] );

  
  return (
    <div>
      {/* {employees ? employees.map((employee) => <div>employee.id</div>) : <></>} */}
      <Menu pointing vertical>
        <Menu.Item name="GET" as={NavLink} to="/dashboard/employee"/>
        <Menu.Item name="ADD" as={NavLink} to="/dashboard/employee/add" />
        <Menu.Item name="PUT" />
        <Menu.Item name="DELETE" />
      </Menu>
    </div>
  );
}
