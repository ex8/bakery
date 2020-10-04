import React from 'react'
import { Card, CardHeader, CardContent, Grid, TextField, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { DateTimePicker } from '@material-ui/pickers'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}))

const DeliveryForm: React.FC = () => {
  const { card } = useStyles()
  return (
    <Card className={card}>
      <CardHeader
        title='Your Delivery'
        subheader='Once ready, we will deliver your order as dated.'
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField variant='outlined' label='Street Address' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant='outlined' label='City' fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
              variant='outlined'
              label='State'
              value='CA'
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField variant='outlined' label='Zip Code' fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant='outlined'
              label='Country'
              value='USA'
              disabled
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
              helperText='This is the delivery day and time of when your order will arrive.'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DeliveryForm
