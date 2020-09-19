import React from 'react'
import { Grid, IconButton, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons'

const ProductFilter: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          variant='outlined'
          label='Search'
          InputProps={{
            endAdornment: (
              <IconButton>
                <FontAwesomeIcon icon={faSearch} />
              </IconButton>
            )
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant='outlined'
          label='Filter'
          InputProps={{
            endAdornment: (
              <IconButton>
                <FontAwesomeIcon icon={faCode} />
              </IconButton>
            )
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default ProductFilter
