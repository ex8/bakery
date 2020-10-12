import React, { FC } from 'react'
import { Breadcrumbs, Button, Card, CardMedia, Grid, Link, List, ListItem, ListItemText, Typography, Container } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheese, faHome, faShoppingCart, faTh } from '@fortawesome/free-solid-svg-icons'
import { Link as RouterLink } from 'react-router-dom'
import Product from '../components/product/Product'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  card: {
    padding: theme.spacing(2),
  },
  icon: {
    paddingRight: theme.spacing(1),
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '53.25%',
  },
  divider: {
    margin: theme.spacing(3),
  },
}))

const ProductDetail: FC = () => {
  const { container, card, icon, list, media, divider } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography variant='h4'>
                Chocolate Tuxedo Cake
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faShoppingCart} />}>
                Add to Cart ($5.99)
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs>
            <Link component={RouterLink} color='inherit' to='/'>
              <FontAwesomeIcon className={icon} icon={faHome} size='sm' />
              <Typography variant='caption'>
                Home
              </Typography>
            </Link>
            <Link component={RouterLink} color='inherit' to='/menu'>
              <FontAwesomeIcon className={icon} icon={faTh} size='sm' />
              <Typography variant='caption'>
                Menu
              </Typography>
            </Link>
            <Typography color='textPrimary'>
              <FontAwesomeIcon className={icon} icon={faCheese} size='sm' />
              <Typography variant='caption'>
                Chocolate Tuxedo Cake
              </Typography>
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className={card}>
                <CardMedia className={media} image='https://source.unsplash.com/collection/random' title='image' />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={card}>
                <Typography variant='h5'>Description</Typography>
                <Typography variant='body2' paragraph>
                  This delicate, yet rich Chocolate Tuxedo Cake pairs elegantly with a side of turkish coffee.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className={card}>
                <Typography variant='h5'>Ingredients</Typography>
                <List className={list}>
                  {[1, 1, 1, 1].map((_, i) => (
                    <ListItem key={i} button>
                      <ListItemText primary='Eggs' />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={card}>
                <Typography variant='h5'>Categories</Typography>
                <List className={list}>
                  {[1, 1, 1, 1].map((_, i) => (
                    <ListItem key={i} button>
                      <ListItemText primary='Dessert' />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <div className={divider} />
        <Grid item xs={12}>
          <Typography variant='h5' gutterBottom>Related Items</Typography>
          <Grid container spacing={2}>
            {[1, 1, 1].map((v, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export { ProductDetail }
