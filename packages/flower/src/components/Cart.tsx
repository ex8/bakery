import React from 'react'
import { Avatar, Button, Divider, Drawer, Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSadCry } from '@fortawesome/free-solid-svg-icons'
import { ICartToggleAction, cartToggle, cartClearDialogToggle, ICartClearDialogToggleAction } from '../state/actions'
import { Link } from 'react-router-dom'

interface ICartProps {
  open: boolean
  cartToggle: () => ICartToggleAction
  cartClearDialogToggle: () => ICartClearDialogToggleAction
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
  title: {
    padding: theme.spacing(3),
    color: 'inherit',
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
    backgroundColor: '#9CC8F5',
    width: 115,
    height: 115,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const Cart: React.FC<ICartProps> = ({ open, cartToggle, cartClearDialogToggle }: ICartProps) => {
  const { drawer, paper, title, checkout, avatar, link } = useStyles()
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
          <Grid container className={title} justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h5'>
                Your Cart (5)
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Clear' arrow>
                <IconButton onClick={() => cartClearDialogToggle()}>
                  <FontAwesomeIcon icon={faTrash} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Avatar className={avatar}>
            <FontAwesomeIcon icon={faSadCry} size='4x' />
          </Avatar>
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
  cartClearDialogToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
