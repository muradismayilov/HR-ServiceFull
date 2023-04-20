import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import EmployeeList from "../pages/EmployeeList";

import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element= {<EmployeeList/>} /> 
              <Route path="/dashboard/employee" element={<EmployeeList />} />
              
             
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
