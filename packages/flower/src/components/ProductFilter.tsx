import React, { useState } from 'react'
import { Grid, IconButton, TextField, Chip, Tooltip, FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const ProductFilter: React.FC = () => {
  const { chip } = useStyles()
  const [category, setCategory] = useState('')
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          variant='outlined'
          label='Search'
          InputProps={{
            endAdornment: (
              <Tooltip title='Search' arrow>
                <IconButton>
                  <FontAwesomeIcon icon={faSearch} />
                </IconButton>
              </Tooltip>
            )
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl variant='outlined' fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label='Category'
            value={category}
            onChange={(e) => setCategory(e.target.value as string)}
          >
            <MenuItem value='all'><em>All</em></MenuItem>
            <MenuItem value='cakes'>Cakes</MenuItem>
            <MenuItem value='pastry'>Pastry</MenuItem>
            <MenuItem value='Dessert'>Dessert</MenuItem>
            <MenuItem value='crepes'>Crepes</MenuItem>
            <MenuItem value='misc'>Misc</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Chip
          className={chip}
          clickable
          icon={<FontAwesomeIcon icon={faSearch} />}
          label='Chocolate'
        />
      </Grid>
    </Grid>
  )
}

export default ProductFilter
