import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Grid, Hidden } from '@material-ui/core'
import ChefSvg from '../assets/svg/chef.svg'
import { Svg } from '../components'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const Login: FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          test
        </Grid>
        <Hidden xsDown>
          <Grid item xs={6}>
            <Svg component={ChefSvg} viewBox='0 0 1000 1000' />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export { Login }
