import React from 'react'
import { Card, CardContent, CardMedia, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))


const MenuList: React.FC = () => {
  const { container, card, media } = useStyles()
  return (
    <div className={container}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <h2>search bar & filters</h2>
          </Grid>
          <Grid item xs={12}>
            <Card className={card}>
              <CardMedia className={media} image='https://source.unsplash.com/random' />
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    TITLE
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export { MenuList }
