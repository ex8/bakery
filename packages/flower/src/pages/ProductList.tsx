import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Product from '../components/product/Product'
import ProductFilter from '../components/product/ProductFilter'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const ProductList: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <Grid container spacing={3}>
        <ProductFilter />
        {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export { ProductList }
