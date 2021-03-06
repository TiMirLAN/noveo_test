import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Auth from 'containers/auth'
import Files from 'containers/files'
import ErrorToast from 'containers/error_toast'

const App = () => (
  <Container fluid className="h-100">
    <BrowserRouter>
      <Route path='/' component={Auth} exact/>
      <Route path='/files/:path*' component={Files}/>
    </BrowserRouter>
    <ErrorToast />
  </Container>
)

export default App
