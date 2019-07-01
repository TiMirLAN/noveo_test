import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Auth from 'containers/auth'
import Files from 'containers/files'

const App = () => (
  <BrowserRouter>
    <Route path='/' component={Auth} exact/>
    <Route path='/files/:path?' component={Files}/>
  </BrowserRouter>
)

export default App
