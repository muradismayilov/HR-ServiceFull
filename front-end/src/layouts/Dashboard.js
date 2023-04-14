import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CartDetail from "../pages/CartDetail";
import EmployeeAdd from "../pages/EmployeeAdd";
import EmployeeDetails from "../pages/EmployeeDetails";

import ProductList from "../pages/ProductList";
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
              <Route exact path="/" element={<ProductList />} />
              <Route path="/employee" element={<ProductList />} />
              <Route path="/employee/:id" element={<EmployeeDetails />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/employee/add" element={<EmployeeAdd />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
