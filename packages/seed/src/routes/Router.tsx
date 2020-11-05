import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, Dashboard, List, FourOhFour } from '../pages'

const Router: FC = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/login' component={Login} />
    <Route path='/list/:model' component={List} />
    <Route component={FourOhFour} />
  </Switch>
)

export { Router }
