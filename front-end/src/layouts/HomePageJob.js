import React from 'react'
import { Container } from 'semantic-ui-react'
import DashboardJob from './DashboardJob'
import Navi from './Navi'

export default function HomePageJob() {
  return (
    <div>
        <Navi />
      <Container className="main">
        <DashboardJob />
      </Container>
    </div>
  )
}
