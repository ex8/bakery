import React, { useState, FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ProductItemCollapse from './ProductItemCollapse'
import ProductItemActions from './ProductItemActions'
import { To } from '../../routes'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  label: {
    backgroundColor: '#e8eef1',
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
  },
  labelIcon: {
    paddingRight: theme.spacing(0.5),
  },
}))

const Product: FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { container, media, label, labelIcon } = useStyles()
  return (
    <Card className={container}>
      <CardMedia className={media} image='https://source.unsplash.com/collection/4459647' title='title' />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <To to='/menu/ababa'>
              <Typography variant='h5'>Chocolate Tuxedo Cake</Typography>
            </To>
          </Grid>
          <Grid item>
            <Paper className={label} elevation={0} square>
              <FontAwesomeIcon className={labelIcon} icon={faDollarSign} size='sm' />
              <Typography variant='button'>{parseFloat('5.99').toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              A delicious, rich chocolate tuxedo cake made with love.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <ProductItemActions expanded={expanded} setExpanded={setExpanded} />
      <ProductItemCollapse expanded={expanded} />
    </Card>
  )
}

export default Product
