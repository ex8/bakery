import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography, Card, Avatar, CardContent, CardHeader, Container } from '@material-ui/core'
import JourneySvg from '../assets/svg/journey.svg'
import { Svg } from '../components/landing'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  card: {
    padding: theme.spacing(4),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const About: FC = () => {
  const { container, card, avatar } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Svg component={JourneySvg} viewBox='0 0 1000 1000' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h4' gutterBottom>
            Our Journey
          </Typography>
          <Typography paragraph>
            A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please. A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please.
          </Typography>
          <Typography paragraph>
            A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please.
            A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please.
          </Typography>
          <Typography paragraph>
            A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please.
            A small monologue, about two paragraphs describing the history of Heavenly Sweets.
            A second paragrap here with more information please.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {[1, 1, 1].map((_, i) => (
              <Grid key={i} item xs={12} sm={4}>
                <Card className={card}>
                  <CardHeader avatar={<Avatar className={avatar} src='https://material-ui.com/static/images/avatar/1.jpg' />} />
                  <CardContent>
                    <Typography variant='h6'>Ray Rohani</Typography>
                    <Typography variant='subtitle2'>Head Baker</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export { About }
