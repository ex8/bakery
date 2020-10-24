import React, { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { To } from '../../routes'

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
      <AppBar elevation={0}>
        <Toolbar>
          <IconButton className={bars} color='inherit'>
            <FontAwesomeIcon icon={faBars} size="xs" />
          </IconButton>
          <Typography className={container} variant='h6'>
            <To to='/'>Heavenly Sweets</To>
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={3} color='secondary'>
              <FontAwesomeIcon icon={faBell} size='sm' />
            </Badge>
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

export default TopBar
