import React from 'react'
import { Avatar, Button, Divider, Drawer, Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { ICartToggleAction, cartToggle } from '../state/actions'
import { Link } from 'react-router-dom'
import CartContent from './CartContent'
import CartTitle from './CartTitle'

interface ICartProps {
  open: boolean
  cartToggle: () => ICartToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    flexShrink: 0,
  },
  paper: {
    [theme.breakpoints.down('xs')]: {
      width: 285,
    },
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  checkout: {
    padding: theme.spacing(2),
    bottom: theme.spacing(0),
    position: 'absolute',
  },
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
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const Cart: React.FC<ICartProps> = ({ open, cartToggle }: ICartProps) => {
  const { drawer, paper, checkout, avatar, link } = useStyles()
  return (
    <Drawer
      className={drawer}
      anchor='right'
      open={open}
      classes={{ paper }}
      onClose={() => cartToggle()}
    >
      <Grid container>
        <Grid item xs={12}>
          <CartTitle text='Your Cart (5)' />
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faSadCry} size='4x' />
          </Avatar>
          <CartContent />
        </Grid>
        <Grid item xs={12}>
          <Link className={link} to='/checkout'>
            <Button
              className={checkout}
              color='secondary'
              variant='contained'
              size='large'
              onClick={() => cartToggle()}
              fullWidth
            >
              Checkout 5 items ($105.21)
          </Button>
          </Link>
        </Grid>
      </Grid>
    </Drawer>
  )
}

const mapStateToProps = (state: IAppState) => ({
  open: state.cart.open,
})

const mapDispatchToProps = {
  cartToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
