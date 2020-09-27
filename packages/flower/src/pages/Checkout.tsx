import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faCalendarAlt, faEnvelope, faIdCard, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { DateTimePicker } from '@material-ui/pickers'

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
        <Grid item xs={12} sm={6}>
          <Card className={card}>
            <CardHeader title='Your Items' />
            <CardContent>
              <Typography>
                same component as cart drawer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={card}>
            <CardHeader
              title='Your Order'
              subheader='To complete your order, you must fill in basic information.'
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    label='Delivery Address'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <FontAwesomeIcon icon={faAddressBook} />
                        </IconButton>
                      )
                    }}
                    fullWidth
                  />
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
              </Grid>
            </CardContent>
            <CardActions>
              <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPaypal} />}>
                Pay using PayPal
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export { Checkout }
