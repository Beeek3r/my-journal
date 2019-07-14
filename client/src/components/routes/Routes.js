import React, { Fragment } from 'react'
import PrivateRoute from '../routing/PrivateRoute'

import Home from '../views/home/Home'
import Journal from '../views/journal/Journal'
import Finance from '../views/finance/Finance'
import Nutrition from '../views/nutrition/Nutrition'
import Exercise from '../views/exercise/Exercise'
import Account from '../views/account/Account'
import NewJournal from '../views/journal/NewJournal'

const Routes = () => {
  return (
    <Fragment>
      {/* Dashboard */}
      <PrivateRoute exact path="/" component={Home} />

      {/* Journals */}
      <PrivateRoute exact path="/journal" component={Journal} />
      <PrivateRoute exact path="/journal/new" component={NewJournal} />

      <PrivateRoute exact path="/finance" component={Finance} />
      <PrivateRoute exact path="/nutrition" component={Nutrition} />
      <PrivateRoute exact path="/exercise" component={Exercise} />
      <PrivateRoute exact path="/account" component={Account} />
    </Fragment>
  )
}

export default Routes
