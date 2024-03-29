import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import JobList from '../pages/JobList'
import JobCategories from './JobCategories'

export default function DashboardJob() {
  return (
    <div>

<Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobCategories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="*" element= {<JobList/>} /> 
              <Route path="/dashboardjob/job" element= {<JobList/>} /> 
             
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>




    </div>
  )
}
