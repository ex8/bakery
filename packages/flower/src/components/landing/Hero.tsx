import React, { FC } from 'react'
import { Typography, Divider, Grid, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import CakeSvg from '../../assets/svg/cake.svg'
import { To } from '../../routes'
import { Svg } from '../landing'

const useStyles = makeStyles((theme: Theme) => ({
  color: {
    color: theme.palette.primary.main,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const Hero: FC = () => {
  const { color, divider } = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <Typography variant='h3' gutterBottom>
          Welcome to <span className={color}>Heavenly Sweets</span>.
          </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Delicious, hand-crafted cakes made for delivery.
          View our menu and see our wide array of items.
          We ensure high quality ingredients along with
          apprioriately calculated pricing.
          </Typography>
        <Divider className={divider} light />
        <Typography variant='subtitle1' gutterBottom>
          Delicious, hand-crafted cakes made for delivery.
          View our menu and see our wide array of items.
          We ensure high quality ingredients along with
          apprioriately calculated pricing.
          </Typography>
        <div className={divider} />
        <Grid container spacing={2}>
          <Grid item>
            <To to='/menu'>
              <Button variant='contained' color='secondary'>View Our Menu</Button>
            </To>
          </Grid>
          <Grid item>
            <To to='/about'>
              <Button variant='contained' color='primary'>Learn About Us</Button>
            </To>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Svg component={CakeSvg} fontSize='large' viewBox='0 0 1000 1000' />
      </Grid>
    </Grid>
  )
}

export default Hero
