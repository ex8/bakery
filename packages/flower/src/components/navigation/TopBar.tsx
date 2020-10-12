import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigationToggle, INavigationToggleAction } from '../../state/actions'
import { cartToggle, ICartToggleAction } from '../../state/actions'

interface ITopBarProps {
  navigationToggle: () => INavigationToggleAction
  cartToggle: () => ICartToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  bars: {
    marginLeft: -12,
  },
  toolbar: theme.mixins.toolbar,
}))

const TopBar: React.FC<ITopBarProps> = ({ navigationToggle, cartToggle }: ITopBarProps) => {
  const { container, link, bars, toolbar } = useStyles()
  return (
    <div className={container}>
      <AppBar color='inherit' elevation={0}>
        <Toolbar>
          <IconButton className={bars} color='inherit' onClick={() => navigationToggle()}>
            <FontAwesomeIcon icon={faBars} size="xs" />
          </IconButton>
          <Typography className={container} variant='h6'>
            <Link className={link} to='/'>Heavenly Sweets</Link>
          </Typography>
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