import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, SvgIcon, Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import FourOhFourSvg from '../assets/svg/fourOhFour.svg'
import { To } from '../routes'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))


const FourOhFour: FC = () => {
  const { container, svg, center } = useStyles()
  return (
    <Container className={container}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <SvgIcon classes={{ root: svg }} component={FourOhFourSvg} viewBox='0 0 1000 1000' />
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
