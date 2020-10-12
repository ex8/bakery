import React from 'react'
import { Card, CardHeader, CardContent, Grid, TextField, IconButton, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEnvelope, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}))

const ContactForm: React.FC = () => {
  const { card } = useStyles()
  return (
    <Card className={card}>
      <CardHeader
        title='Contact Us'
        subheader='Fill out the form below and we will get back to you as soon as we can!'
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
              label='Message'
              fullWidth
              multiline
              rows={4}
              rowsMax={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
            >Send</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ContactForm
