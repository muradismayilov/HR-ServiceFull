import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import PrivateRoute from "./layouts/PrivateRoute";
import HomePageJob from "./layouts/HomePageJob";
import HomePageDep from "./layouts/HomePageDep";
import JobAdd from "./pages/JobAdd";
import DepAdd from "./pages/DepAdd";
import EmployeeAdd from "./pages/EmployeeAdd";
import EmployeeDetails from "./pages/EmployeeDetails";


function App() {
  

  return (
   <Routes>
   
   <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
       <Route
      path="/dashboard/employee"
      element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      }
    /> 
      
      <Route
        path="/dashboardjob"
        element={
          <PrivateRoute>
            <HomePageJob />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboardjob/job"
        element={
          <PrivateRoute>
            <HomePageJob />
          </PrivateRoute>
        }
      /> 
      <Route
        path="/dashboarddep"
        element={
          <PrivateRoute>
            <HomePageDep />
          </PrivateRoute>
        }
      />
        <Route
        path="/dashboarddep/dep"
        element={
          <PrivateRoute>
            <HomePageDep />
          </PrivateRoute>
        }
      /> 
      <Route
        path="/dashboard/employee/add"
        element={
          <PrivateRoute>
            <EmployeeAdd />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/employee/:id"
        element={
          <PrivateRoute>
            <EmployeeDetails />
          </PrivateRoute>
        }
      /> 
       <Route
        path="/dashboardjob/job/add"
        element={
          <PrivateRoute>
            <JobAdd />
          </PrivateRoute>
        }
      /> 
      <Route
        path="/dashboarddep/dep/add"
        element={
          <PrivateRoute>
            <DepAdd />
          </PrivateRoute>
        }
      /> 

      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}

export default App;
