import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing, ProductList, ProductDetail, Checkout, FourOhFour, About, Contact, Custom } from '../pages'

const Router: FC = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/menu' component={ProductList} />
    <Route exact path='/menu/:id' component={ProductDetail} />
    <Route exact path='/custom' component={Custom} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/checkout' component={Checkout} />
    <Route component={FourOhFour} />
  </Switch>
)

export { Router }
