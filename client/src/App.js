import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';
import JournalState from './context/journal/JournalState';
import NotFound from './components/views/notFound/NotFound';

import Home from './components/views/home/Home';
import Journal from './components/views/journal/Journal';
import JournalNew from './components/views/journal-new/JournalNew';
import JournalEdit from './components/views/journal-edit/JournalEdit';

function App() {
  return (
    <Router>
      <AuthState>
        <JournalState>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/journal" component={Journal} />
            <PrivateRoute exact path="/journal/new" component={JournalNew} />
            <PrivateRoute exact path="/journal/edit" component={JournalEdit} />

            <PrivateRoute component={NotFound} />
          </Switch>
        </JournalState>
      </AuthState>
    </Router>
  );
}

// Remember to delete to test css file sass etc.

export default App;
