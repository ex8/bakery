import React from 'react'
import { List } from '@material-ui/core'
import CartContentItem from './CartContentItem'

const CartContent: React.FC = () => {
  return (
    <List>
      {[1, 1, 1, 1, 1].map((_, i) => <CartContentItem key={i} />)}
    </List>
  )
}

export default CartContent
