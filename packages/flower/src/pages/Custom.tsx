import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const Custom: React.FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Custom Cakes
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom>
            Custom Cake Form
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom>
            Custom Cake Image Upload Form
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Custom }
