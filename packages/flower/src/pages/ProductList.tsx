import React, { FC } from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Product from '../components/product/Product'
import ProductFilter from '../components/product/ProductFilter'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    marginTop: theme.spacing(3),
  },
}))

const ProductList: FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      <Grid container spacing={3}>
        <ProductFilter />
        {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export { ProductList }
