import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard, Login, FourOhFour, List } from '../pages'

export const VALID_MODELS = ['/products', '/orders', '/receipts', '/admins']

const Router: FC = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/login' component={Login} />
    <Route path={VALID_MODELS} render={props => <List data={false} {...props} />} />
    <Route component={FourOhFour} />
  </Switch>
)

export { Router }
