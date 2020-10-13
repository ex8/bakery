import React, { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { navigationToggle, INavigationToggleAction } from '../../state/actions'
import { cartToggle, ICartToggleAction } from '../../state/actions'
import { To } from '../../routes'

interface ITopBarProps {
  navigationToggle: () => INavigationToggleAction
  cartToggle: () => ICartToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  bars: {
    marginLeft: -12,
  },
  toolbar: theme.mixins.toolbar,
}))

const TopBar: FC<ITopBarProps> = ({ navigationToggle, cartToggle }: ITopBarProps) => {
  const { container, bars, toolbar } = useStyles()
  return (
    <div className={container}>
      <AppBar color='inherit' elevation={0}>
        <Toolbar>
          <IconButton className={bars} color='inherit' onClick={() => navigationToggle()}>
            <FontAwesomeIcon icon={faBars} size="xs" />
          </IconButton>
          <Typography className={container} variant='h6'>
            <To to='/'>Heavenly Sweets</To>
          </Typography>
          <To to='/menu'>
            <Button>Menu</Button>
          </To>
          <IconButton color='inherit' onClick={() => cartToggle()}>
            <Badge badgeContent={5} color="primary">
              <FontAwesomeIcon icon={faShoppingCart} size="xs" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={toolbar} />
    </div>
  )
}

const mapDispatchToProps = {
  navigationToggle,
  cartToggle,
}

export default connect(null, mapDispatchToProps)(TopBar)
