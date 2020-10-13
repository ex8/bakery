import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import FourOhFourSvg from '../assets/svg/fourOhFour.svg'
import { To } from '../routes'
import { Svg } from '../components/landing'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))


const FourOhFour: FC = () => {
  const { container, center } = useStyles()
  return (
    <Container className={container}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Svg component={FourOhFourSvg} viewBox='0 0 1000 1000' />
        </Grid>
        <Grid className={center} item xs={12} sm={5}>
          <Typography variant='h2'>Oops!</Typography>
          <Typography variant='h5'>We cannot find that page!</Typography>
          <To to='/'>
            <Button color='secondary' variant='contained'>Back Home</Button>
          </To>
        </Grid>
      </Grid>
    </Container>
  )
}

export { FourOhFour }
