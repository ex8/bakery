import React from 'react'
import { Avatar, Button, Divider, Drawer, Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSadCry } from '@fortawesome/free-solid-svg-icons'
import { ICartToggleAction, cartToggle } from '../state/actions'

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
  title: {
    padding: theme.spacing(3),
    color: 'inherit',
  },
  checkout: {
    padding: theme.spacing(2),
  },
  avatar: {
    [theme.breakpoints.down('xs')]: {
      left: '25%',
    },
    [theme.breakpoints.up('sm')]: {
      left: '35%',
    },
    margin: theme.spacing(2),
    backgroundColor: '#CFBBFF',
    width: 115,
    height: 115,
  },
}))

const Cart: React.FC<ICartProps> = ({ open, cartToggle }: ICartProps) => {
  const { drawer, paper, title, checkout, avatar } = useStyles()
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
                <IconButton>
                  <FontAwesomeIcon icon={faTrash} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Avatar className={avatar}>
        <FontAwesomeIcon icon={faSadCry} size='4x' />
      </Avatar>
      <Divider />
      <Button className={checkout} color='secondary' variant='contained' size='large' fullWidth>
        Checkout 5 items ($105.21)
      </Button>
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
