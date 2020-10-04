import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography, SvgIcon, Container } from '@material-ui/core'
import CartAddSvg from '../assets/svg/add_cart.svg'
import CalendarSvg from '../assets/svg/calendar.svg'
import PaySvg from '../assets/svg/pay.svg'
import DeliverySvg from '../assets/svg/delivery.svg'
import SocialSvg from '../assets/svg/social.svg'
import StepItem, { IStepItem } from '../components/landing/StepItem'
import Hero from '../components/landing/Hero'
import Featured from '../components/landing/Featured'
import SocialButtons from '../components/landing/SocialButtons'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  strip: {
    marginBottom: theme.spacing(4),
  },
}))

const steps: IStepItem[] = [
  {
    step: 1,
    Icon: CartAddSvg,
    viewBox: '0 0 1000 1000',
    description: 'Browse our menu and add items to your cart.',
  },
  {
    step: 2,
    Icon: CalendarSvg,
    viewBox: '0 0 1000 1000',
    description: 'At checkout, set a delivery location and date.',
  },
  {
    step: 3,
    Icon: PaySvg,
    viewBox: '0 0 1000 1000',
    description: 'Proceed to completing your order via PayPal.',
  },
  {
    step: 4,
    Icon: DeliverySvg,
    viewBox: '0 0 1000 1000',
    description: 'We will deliver your order as dated, on time.',
  },
]

const Landing: React.FC = () => {
  const { container, icon, strip } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid className={strip} item xs={12}>
          <Hero />
        </Grid>
        <Grid className={strip} item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h4'>How it works</Typography>
            </Grid>
            {steps.map((step: IStepItem, i) => (
              <Grid key={i} item xs={12} sm={3}>
                <StepItem item={step} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid className={strip} item xs={12}><Featured /></Grid>
        <Grid className={strip} item xs={12}><Featured /></Grid>
        <Grid className={strip} item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={12}>
                  <SvgIcon classes={{ root: icon }} component={SocialSvg} viewBox='0 0 1000 1000' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant='h4' gutterBottom>Connect with us</Typography>
                  <Typography paragraph>
                    A small monologue, about two paragraphs describing the history of Heavenly Sweets.
                    A second paragrap here with more information please.
                  </Typography>
                  <Typography paragraph>
                    A second paragrap here with more information please.
                    A small monologue, about two paragraphs describing the history of Heavenly Sweets.
                  </Typography>
                  <SocialButtons />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Landing }
