import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container, SvgIcon, Button } from '@material-ui/core'
import ContactForm from '../components/forms/ContactForm'
import PortfolioSvg from '../assets/svg/portfolio.svg'
import { To } from '../routes'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  image: {
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

const Custom: FC = () => {
  const { container, image, center } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid className={center} item xs={12}>
          <Typography variant='h3'>Custom Cakes</Typography>
          <Typography variant='h6'>
            Need a custom cake made to specification?
            We can do it just right and deliver it!
          </Typography>
        </Grid>
        <Grid className={center} item xs={12} sm={5}>
          <Typography variant='h4'>Portfolio</Typography>
          <Typography variant='h6' paragraph>
            Check out our rich gallery of photos to see our custom cakes.
            We have a wide array of diverse cakes for all kinds of celebrations!
          </Typography>
          <To to='/gallery'>
            <Button color='secondary' variant='contained'>Our Gallery</Button>
          </To>
        </Grid>
        <Grid item xs={12} sm={7}>
          <SvgIcon classes={{ root: image }} component={PortfolioSvg} viewBox='0 0 750 750' />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant='h4'>Custom Cake Order</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  )
}

export { Custom }
