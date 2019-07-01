import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Auth from 'containers/auth'
import Files from 'containers/files'

const App = () => (
  <Container>
    <BrowserRouter>
      <Route path='/' component={Auth} exact/>
      <Route path='/files/:path?' component={Files}/>
    </BrowserRouter>
  </Container>
)

export default App
