import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { TopBar } from '../components'
import { Card, Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  card: {
    padding: theme.spacing(4),
  },
}))

const Dashboard: FC = () => {
  const { container, card } = useStyles()
  return (
    <div className={container}>
      <TopBar />
      <Container>
        <Grid container spacing={2}>
          {[1, 1, 1].map((tile, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Card className={card}>
                <Grid container>
                  <Grid item xs={12}>
                    0
                </Grid>
                  <Grid item xs={12}>
                    <Typography>Active Orders</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          {[1, 1].map((tile, i) => (
            <Grid key={i} item xs={12} sm={6}>
              <Card className={card}>
                <Grid container>
                  <Grid item xs={12}>
                    0
                </Grid>
                  <Grid item xs={12}>
                    <Typography>Active Orders</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Card className={card}>
              <Grid container>
                <Grid item xs={12}>
                  0
                </Grid>
                <Grid item xs={12}>
                  <Typography>Active Orders</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export { Dashboard }
