import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import MenuList from '../pages/MenuList'
import MenuDetail from '../pages/MenuDetail'
import Checkout from '../pages/Checkout'
import FourOhFour from '../pages/FourOhFour'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/menu' component={MenuList} />
      <Route exact path='/menu/:id' component={MenuDetail} />
      <Route exact path='/checkout' component={Checkout} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
)

export default Router
