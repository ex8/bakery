import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing, MenuList, MenuDetail, Checkout, FourOhFour } from '../pages'

const Router: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/menu' component={MenuList} />
    <Route exact path='/menu/:id' component={MenuDetail} />
    <Route exact path='/checkout' component={Checkout} />
    <Route component={FourOhFour} />
  </Switch>
)

export { Router }
