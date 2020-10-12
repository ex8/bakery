import React, { FC } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Product from '../product/Product'

const Featured: FC = () => {
  return (
    <Grid container spacing={3} justify='space-between'>
      <Grid item xs={12}>
        <Grid container justify='space-between' alignContent='space-between'>
          <Grid item>
            <Typography variant='h4'>
              Top Items
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlus} />}>
              View All
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {[1, 1, 1].map((_, i) => (
        <Grid key={i} item xs={12} sm={4}>
          <Product />
        </Grid>
      ))}
    </Grid>
  )
}

export default Featured
