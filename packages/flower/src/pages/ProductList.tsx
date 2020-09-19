import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Product from '../components/Product'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const ProductList: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              variant='outlined'
              label='Search'
              InputProps={{
                endAdornment: <FontAwesomeIcon icon={faSearch} />
              }}
              fullWidth
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              variant='outlined'
              label='Search'
              InputProps={{
                endAdornment: <FontAwesomeIcon icon={faSearch} />
              }}
              fullWidth
            />
          </form>
        </Grid>
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
