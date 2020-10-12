import React, { FC } from 'react'
import { Card, CardHeader, CardContent, Grid, TextField, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}))

const OrderForm: FC = () => {
  const { card } = useStyles()
  return (
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
  )
}

export default OrderForm
