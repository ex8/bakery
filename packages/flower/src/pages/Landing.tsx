import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography, SvgIcon, Card, CardContent, IconButton, CardHeader, Avatar, Button } from '@material-ui/core'
import CakeSvg from '../assets/svg/cake.svg'
import CartAddSvg from '../assets/svg/add_cart.svg'
import CalendarSvg from '../assets/svg/calendar.svg'
import PaySvg from '../assets/svg/pay.svg'
import DeliverySvg from '../assets/svg/delivery.svg'
import SocialSvg from '../assets/svg/social.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Product from '../components/Product'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  color: {
    color: theme.palette.primary.main,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  card: {
    padding: theme.spacing(4),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  strip: {
    marginBottom: theme.spacing(4),
  },
}))

const Landing: React.FC = () => {
  const { container, color, icon, card, avatar, strip } = useStyles()
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant='h4' gutterBottom>
            Welcome to <span className={color}>Heavenly Sweets</span>.
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            Delicious, hand-crafted cakes made for delivery.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <SvgIcon classes={{ root: icon }} component={CakeSvg} fontSize='large' viewBox='0 0 1000 1000' />
        </Grid>
        <Grid className={strip} item xs={12}>
          <Grid container spacing={2} justify='space-between'>
            <Grid item xs={12}>
              <Typography variant='h4'>
                How it works
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={card}>
                <CardHeader avatar={<Avatar className={avatar}>1</Avatar>} />
                <CardContent>
                  <SvgIcon classes={{ root: icon }} component={CartAddSvg} viewBox='0 0 1000 1000' />
                  <Typography>Browse our menu and add items to your cart.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={card}>
                <CardHeader avatar={<Avatar className={avatar}>2</Avatar>} />
                <CardContent>
                  <SvgIcon classes={{ root: icon }} component={CalendarSvg} viewBox='0 0 1000 1000' />
                  <Typography>At checkout, set a delivery location and date.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={card}>
                <CardHeader avatar={<Avatar className={avatar}>3</Avatar>} />
                <CardContent>
                  <SvgIcon classes={{ root: icon }} component={PaySvg} viewBox='0 0 1000 1000' />
                  <Typography>Proceed to completing your order via PayPal.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={card}>
                <CardHeader avatar={<Avatar className={avatar}>4</Avatar>} />
                <CardContent>
                  <SvgIcon classes={{ root: icon }} component={DeliverySvg} viewBox='0 0 1000 1000' />
                  <Typography>We will deliver your order as dated, on time.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={strip} item xs={12}>
          <Grid container spacing={3} justify='space-between'>
            <Grid item xs={12}>
              <Grid container justify='space-between' alignContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>
                    Top Items
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlus} />}>
                    View All
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {[1, 1, 1].map((_, i) => (
              <Grid key={i} item xs={12} sm={4}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid className={strip} item xs={12}>
          <Grid container spacing={3} justify='space-between'>
            <Grid item xs={12}>
              <Grid container justify='space-between' alignContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>
                    New Items
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlus} />}>
                    View All
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {[1, 1, 1].map((_, i) => (
              <Grid key={i} item xs={12} sm={4}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Grid>
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
                  <IconButton><FontAwesomeIcon icon={faInstagram} /></IconButton>
                  <IconButton><FontAwesomeIcon icon={faTwitter} /></IconButton>
                  <IconButton><FontAwesomeIcon icon={faFacebook} /></IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export { Landing }
