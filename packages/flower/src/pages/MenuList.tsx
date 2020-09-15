import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '../components/MenuItem'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const MenuList: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>search bar & filters</h2>
          </Grid>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <MenuItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export { MenuList }
