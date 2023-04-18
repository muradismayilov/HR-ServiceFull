import React  from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function DepCategories() {
// const [jwt, setjwt] = useLocalState("", "jwt");
//   const [dep, setdep] = useState([]);

//   useEffect(() => {
    
//     axios.get("http://localhost:8080/api/department", {
//       headers: {
        
//         Authorization: `Bearer ${jwt}`
//       }
//     })
//       .then(function (response)  {
//         if (response.status === 200) {
//           setdep(response.data)
                    
//         };
//       }).catch(function (error) {         
        
//       });
      
//   },[] );

//   function addDep(){
//     window.location.href = `/dashboarddep/dep/add`
//   }
// function changeToGetDep(){
//   window.location.href = `/dashboarddep/dep`
// }

  return (
    <div>
        <Menu pointing vertical>
        <Menu.Item name="GET DEP" as={NavLink} to="/dashboarddep/dep"/>
        <Menu.Item name="ADD DEP" as={NavLink} to="/dashboarddep/dep/add" />
        <Menu.Item name="PUT DEP" />
        <Menu.Item name="DELETE DEP" />
      </Menu>
    </div>
  )
}
