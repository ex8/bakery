import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, SvgIcon, Typography, Grid, Button } from '@material-ui/core'
import FourOhFourSvg from '../assets/svg/fourOhFour.svg'
import { Link } from 'react-router-dom'

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
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))


const FourOhFour: React.FC = () => {
  const { container, svg, center, link } = useStyles()
  return (
    <Container className={container}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <SvgIcon classes={{ root: svg }} component={FourOhFourSvg} viewBox='0 0 1000 1000' />
        </Grid>
        <Grid className={center} item xs={12} sm={5}>
          <Typography variant='h2'>Oops!</Typography>
          <Typography variant='h5'>We cannot find that page!</Typography>
          <Link className={link} to='/'>
            <Button color='secondary' variant='contained'>Back Home</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export { FourOhFour }
