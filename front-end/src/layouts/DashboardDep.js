import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import DepList from '../pages/DepList'
import DepCategories from './DepCategories'


export default function DashboardDep() {
  return (
    <div>
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <DepCategories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element= {<DepList/>} /> 
              <Route path="/dashboarddep/dep" element= {<DepList/>} />                     
              
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
