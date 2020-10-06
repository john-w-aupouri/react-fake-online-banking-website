import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages'
import Login from './pages/Login'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
    
  )
}

export default App
