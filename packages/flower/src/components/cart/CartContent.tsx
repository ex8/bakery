import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { List, Avatar } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import CartContentItem from './CartContentItem'

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    [theme.breakpoints.down('xs')]: {
      left: '25%',
    },
    [theme.breakpoints.up('sm')]: {
      left: '35%',
    },
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: 115,
    height: 115,
  },
}))

const CartContent: FC = () => {
  const { avatar } = useStyles()
  return (
    <List>
      <Avatar className={avatar}>
        <FontAwesomeIcon icon={faSadCry} size='4x' />
      </Avatar>
      {[1, 1, 1, 1, 1].map((_, i) => <CartContentItem key={i} />)}
    </List>
  )
}

export default CartContent
