import React from 'react'
import { Container } from 'semantic-ui-react'
import Navi from './Navi'
import DashboardMisc from './DashboardMisc'

export default function HomePageMisc() {
  return (
    <div>
 <div>
        <Navi />
      <Container className="main">
        <DashboardMisc />
      </Container>
        </div>

    </div>
  )
}
