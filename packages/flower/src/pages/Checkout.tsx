import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt, faEnvelope, faIdCard, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { DateTimePicker } from '@material-ui/pickers'
import CartContent from '../components/CartContent'
import CartTitle from '../components/CartTitle'

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
    <div className={container}>
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
                Pay using PayPal
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={card}>
            <CardHeader
              title='Your Order'
              subheader='To complete your order, you must fill in basic information.'
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    label='First Name'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faIdCard} />
                        </IconButton>
                      )
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    label='Last Name'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faIdCard} />
                        </IconButton>
                      )
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    label='Email'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </IconButton>
                      )
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    label='Phone Number'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </IconButton>
                      )
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant='outlined' label='Street Address' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant='outlined' label='City' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField variant='outlined' label='State' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField variant='outlined' label='Zip Code' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField variant='outlined' label='Country' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <DateTimePicker
                    label='Delivery Date-Time'
                    value={new Date()}
                    onChange={() => console.log('f')}
                    inputVariant='outlined'
                    variant='inline'
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </IconButton>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    label='Notes'
                    fullWidth
                    placeholder="Any order notes for the baker."
                    multiline
                    rows={4}
                    rowsMax={4}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={card}>
            <CartTitle text='Your Cart (5)' />
            <CartContent />
            <Typography>
              Total amount: $106.55
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export { Checkout }
