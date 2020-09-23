import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  hero: {
    padding: theme.spacing(4),
  },
  steps: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
}))


const Landing: React.FC = () => {
  const { container, hero, steps } = useStyles()
  return (
    <div className={container}>
      <Grid container>
        <Grid item className={hero} xs={12}>Hero (white)</Grid>
        <Grid item className={steps} xs={12}>(steps)</Grid>
        <Grid item xs={12}>contact</Grid>
      </Grid>
    </div>
  )
}

export { Landing }
