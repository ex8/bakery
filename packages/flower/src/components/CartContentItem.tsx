import React from 'react'
import { ListItem, Grid, FormControl, Select, OutlinedInput, MenuItem, Typography, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    paddingLeft: theme.spacing(1),
  },
}))

const CartContentItem: React.FC = () => {
  const { title } = useStyles()
  return (
    <ListItem button>
      <Grid container>
        <Grid item xs={3}>
          <FormControl variant='outlined'>
            <Select
              value={5}
              onChange={() => console.log('ff')}
              input={<OutlinedInput name='quantity' />}
            >
              {Array.from(Array(99).keys()).slice(1).map((n: number, i: number) => (
                <MenuItem key={i} value={n}>{n}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={title} item xs={7}>
          <Typography>Chocolate Tuxedo Cake</Typography>
          <Typography variant='caption'>$5.99</Typography>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title='Close' arrow>
            <IconButton>
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default CartContentItem
