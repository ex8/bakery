import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import MailSvg from '../assets/svg/mail.svg'
import CitySvg from '../assets/svg/city.svg'
import ContactForm from '../components/forms/ContactForm'
import SocialButtons from '../components/landing/SocialButtons'
import { Svg } from '../components/landing'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const Contact: FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Svg component={MailSvg} viewBox='0 0 1000 1000' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Svg component={CitySvg} viewBox='0 0 1000 1000' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5' gutterBottom>
            Located in the heart of the Bay Area!
          </Typography>
          <Typography paragraph>
            Serving the greater Bay Area, up and down the coast. We provide high quality
            and premium desserts at your doorstep. We ensure the product is maintained in
            optimal conditions such that it arrives safely and on time.
          </Typography>
          <Typography paragraph>
            Serving the greater Bay Area, up and down the coast. We provide high quality
            and premium desserts at your doorstep. We ensure the product is maintained in
            optimal conditions such that it arrives safely and on time.
          </Typography>
          <SocialButtons />
        </Grid>
      </Grid>
    </Container>
  )
}

export { Contact }
