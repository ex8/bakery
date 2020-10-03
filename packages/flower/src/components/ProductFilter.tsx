import React from 'react'
import { Grid, IconButton, TextField, Chip, Tooltip } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { IFilterToggleAction, filterToggle } from '../state/actions'

interface IProductFilterDrawerProps {
  filterToggle: () => IFilterToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const ProductFilter: React.FC<IProductFilterDrawerProps> = ({ filterToggle }: IProductFilterDrawerProps) => {
  const { chip } = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          variant='outlined'
          label='Search'
          InputProps={{
            endAdornment: (
              <Tooltip title='Filters' arrow>
                <IconButton onClick={() => filterToggle()}>
                  <FontAwesomeIcon icon={faFilter} />
                </IconButton>
              </Tooltip>
            )
          }}
          fullWidth
        />
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

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  filterToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)
