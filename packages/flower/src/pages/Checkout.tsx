import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Card, Grid, Typography, Container } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import CartContent from '../components/cart/CartContent'
import CartTitle from '../components/cart/CartTitle'
import OrderForm from '../components/forms/OrderForm'
import DeliveryForm from '../components/forms/DeliveryForm'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  card: {
    padding: theme.spacing(2),
  },
}))

const Checkout: React.FC = () => {
  const { container, card } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1} justify='space-between'>
            <Grid item>
              <Typography variant='h4'>
                Checkout
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPaypal} />}>
                Pay using PayPal ($120.50)
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item>
              <OrderForm />
            </Grid>
            <Grid item>
              <DeliveryForm />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={card}>
            <CartTitle text='Your Cart (5)' />
            <CartContent />
            <Typography>Total amount: $106.55</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Checkout }
