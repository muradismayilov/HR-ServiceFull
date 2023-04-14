import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import { useEffect } from "react";
import EmployeeService from "./services/employeeService";
import { useLocalState } from "./utilities/useLocalStorage";

function App() {
  // const [access, setaccess] = useState([])
  // useEffect(() => {
  //   let employeeService = new EmployeeService();
  //   employeeService.getAccess().then(res=>{
  //     setaccess(res.data)
  //   })
  // },[]);
const [jwt, setjwt] = useLocalState("","jwt")

  useEffect(() => {
    
    let employeeService = new EmployeeService()
    employeeService.getAccess().then(function (response) {
        setjwt(response.data.token)
        console.log(jwt)
    })
    .catch(function (error) {
      console.log(error);})
      // .then((response) => Promise.all([response.json(), response.headers]))
      // .then(([body, headers]) => {
      //   setjwt(headers.get("authorization")) 
      //   console.log(jwt)
       
      // });
  });

  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
