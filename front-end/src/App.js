import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import PrivateRoute from "./layouts/PrivateRoute";
import HomePageJob from "./layouts/HomePageJob";
import HomePageDep from "./layouts/HomePageDep";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import DepDetails from "./pages/DepDetails";
import JobDetails from "./pages/JobDetails";
import AddDep from "./pages/AddDep";
import AddJob from "./pages/AddJob";
import HomePageMisc from "./layouts/HomePageMisc";
import AddMisc from "./pages/AddMisc";
import MiscDetails from "./pages/MiscDetails";



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
        path="/dashboardmisc"
        element={
          <PrivateRoute>
            <HomePageMisc/>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboardmisc/misc"
        element={
          <PrivateRoute>
            <HomePageMisc/>
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
        path="/dashboarddep/dep/add"
        element={
          <PrivateRoute>
           <AddDep/>
          </PrivateRoute>
        }
      /> 
      <Route
        path="/dashboard/employee/add"
        element={
          <PrivateRoute>
            <AddEmployee/>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboardjob/job/add"
        element={
          <PrivateRoute>
            <AddJob/>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboardmisc/misc/add"
        element={
          <PrivateRoute>
            <AddMisc/>
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
        path="/dashboarddep/dep/:id"
        element={
          <PrivateRoute>
            <DepDetails />
          </PrivateRoute>
        }
      /> 
      <Route
        path="/dashboardjob/job/:id"
        element={
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        }
      /> 
       <Route
        path="/dashboardmisc/misc/:id"
        element={
          <PrivateRoute>
            <MiscDetails />
          </PrivateRoute>
        }
      /> 
      
      

      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}

export default App;
