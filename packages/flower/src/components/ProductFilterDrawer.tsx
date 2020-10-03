import React from 'react'
import { Divider, Drawer, Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IFilterToggleAction, filterToggle } from '../state/actions'

interface IProductFilterDrawerProps {
  open: boolean
  filterToggle: () => IFilterToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    flexShrink: 0,
  },
  paper: {
    height: '60%',
  },
  title: {
    padding: theme.spacing(2),
    color: 'inherit',
  },
}))

const ProductFilterDrawer: React.FC<IProductFilterDrawerProps> = ({ open, filterToggle }: IProductFilterDrawerProps) => {
  const { drawer, paper, title } = useStyles()
  return (
    <Drawer
      className={drawer}
      anchor='bottom'
      classes={{ paper }}
      open={open}
      onClose={() => filterToggle()}
    >
      <Grid container>
        <Grid item xs={12}>
          <Grid container className={title} justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h5'>
                Your Filters
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Close' arrow>
                <IconButton onClick={() => filterToggle()}>
                  <FontAwesomeIcon icon={faTimes} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider light />
        </Grid>
      </Grid>
    </Drawer>
  )
}

const mapStateToProps = (state: IAppState) => ({
  open: state.filter.open,
})

const mapDispatchToProps = {
  filterToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilterDrawer)
