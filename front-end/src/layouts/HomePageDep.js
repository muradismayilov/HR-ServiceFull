import React from 'react'
import { Container } from 'semantic-ui-react'
import DashboardDep from './DashboardDep'
import Navi from './Navi'

export default function HomePageDep() {
  return (
    <div>
        <Navi />
      <Container className="main">
        <DashboardDep />
      </Container>
        </div>
  )
}
