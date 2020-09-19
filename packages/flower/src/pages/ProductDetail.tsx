import React from 'react'
import { Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const ProductDetail: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Card>
                <h2>Images</h2>
                <p>carousel</p>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <h2>Details</h2>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <h2>Chef Info</h2>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export { ProductDetail }
