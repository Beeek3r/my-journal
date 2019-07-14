import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/routing/PrivateRoute'

import AuthState from './context/auth/AuthState'
import JournalState from './context/journal/JournalState'

function App() {
  return (
    // Check if Conntent should be inside or outside the rrouter??
    <AuthState>
      <JournalState>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/" component={Layout} />
          </Switch>
        </Router>
      </JournalState>
    </AuthState>
  )
}

// Remember to delete to test css file sass etc.

export default App
