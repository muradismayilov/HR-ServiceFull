import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import MiscCategories from "./MiscCategories";
import MiscList from "../pages/MiscList";

export default function DashboardMisc() {
  return (
    <div>
    <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <MiscCategories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element= {<MiscList/>} /> 
              <Route path="/dashboardmisc/misc" element={<MiscList />} />
              
             
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}
