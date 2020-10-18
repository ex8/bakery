import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))

const Gallery: FC = () => {
  const { container, center } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid className={center} item xs={12}>
          <Typography variant='h3'>Gallery</Typography>
          <Typography variant='h6'>
            Our portfolio consists of a wide collection of our sweets. You may find
            stuff from our menu, custom cakes, or inspired creations!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Gallery }
