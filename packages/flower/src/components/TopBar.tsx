import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleNavigation, IToggleNavigationAction } from '../state/actions'

interface ITopBarProps {
  toggleNavigation: () => IToggleNavigationAction
}

const useStyles = makeStyles(theme => ({
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

const TopBar: React.FC<ITopBarProps> = ({ toggleNavigation }: ITopBarProps) => {
  const { container, link, bars, toolbar } = useStyles()
  return (
    <div className={container}>
      <AppBar>
        <Toolbar>
          <IconButton className={bars} color='inherit' onClick={() => toggleNavigation()}>
            <FontAwesomeIcon icon={faBars} size="xs" />
          </IconButton>
          <Typography className={container} variant='h6'>
            <Link className={link} to='/'>Bakery</Link>
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={5} color="secondary">
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
  toggleNavigation,
}

export default connect(null, mapDispatchToProps)(TopBar)
