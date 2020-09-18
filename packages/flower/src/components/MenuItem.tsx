import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import MenuItemCollapse from './MenuItemCollapse'
import MenuItemActions from './MenuItemActions'

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
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const MenuItem: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { container, media, label, labelIcon, link } = useStyles()
  return (
    <Card className={container}>
      <CardMedia className={media} image='https://source.unsplash.com/collection/4459647' title='title' />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Link className={link} to='/menu/ababab'>
              <Typography variant='h5'>Chocolate Tuxedo Cake</Typography>
            </Link>
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
      <MenuItemActions expanded={expanded} setExpanded={setExpanded} />
      <MenuItemCollapse expanded={expanded} />
    </Card>
  )
}

export default MenuItem
