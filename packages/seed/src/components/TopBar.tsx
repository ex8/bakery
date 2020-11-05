import React, { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { To } from '../routes'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  bars: {
    marginLeft: -12,
  },
  toolbar: theme.mixins.toolbar,
}))

const TopBar: FC = () => {
  const { container, bars, toolbar } = useStyles()
  return (
    <div className={container}>
      <AppBar color='primary' elevation={0}>
        <Toolbar>
          <Hidden smUp>
            <IconButton className={bars} color='inherit'>
              <FontAwesomeIcon icon={faBars} size='xs' />
            </IconButton>
          </Hidden>
          <Typography className={container} variant='h6'>
            <To to='/'>H-S Admin</To>
          </Typography>
          <Hidden xsDown>
            <To to='/list/product'><Button>Products</Button></To>
            <To to='/list/order'><Button>Orders</Button></To>
            <To to='/list/receipt'><Button>Receipts</Button></To>
            <To to='/list/admin'><Button>Admins</Button></To>
          </Hidden>
          <IconButton color='inherit'>
            <FontAwesomeIcon icon={faBell} size='xs' />
          </IconButton>
          <IconButton color='inherit'>
            <FontAwesomeIcon icon={faUserCircle} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={toolbar} />
    </div>
  )
}

export { TopBar }
