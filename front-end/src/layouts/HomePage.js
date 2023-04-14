import React from 'react'
import { Container } from 'semantic-ui-react'
import Dashboard from './Dashboard'
import Navi from './Navi'

export default function HomePage() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  )
}
