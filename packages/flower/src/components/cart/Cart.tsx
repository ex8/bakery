import React, { FC } from 'react'
import { Button, Divider, Drawer, Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../../state/reducers'
import { ICartToggleAction, cartToggle } from '../../state/actions'
import CartContent from './CartContent'
import CartTitle from './CartTitle'
import { To } from '../../routes'

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
}))

const Cart: FC<ICartProps> = ({ open, cartToggle }: ICartProps) => {
  const { drawer, paper, checkout } = useStyles()
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
          <CartContent />
        </Grid>
        <Grid item xs={12}>
          <To to='/checkout'>
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
          </To>
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
