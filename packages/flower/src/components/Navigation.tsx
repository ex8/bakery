import React from 'react'
import { Grid, Drawer, List, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { toggleNavigation, IToggleNavigationAction } from '../state/actions'

interface INavigationProps {
  open: boolean
  toggleNavigation: () => IToggleNavigationAction
}

const useStyles = makeStyles(() => ({
  drawer: {
    flexShrink: 0,
  },
  paper: {
    width: 215,
  },
}))

const Navigation: React.FC<INavigationProps> = ({ open, toggleNavigation }: INavigationProps) => {
  const { drawer, paper } = useStyles()
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Drawer className={drawer} classes={{ paper }} open={open} onClose={() => toggleNavigation()}>
          <List>
            <ListSubheader>
              Bakery
            </ListSubheader>
          </List>
        </Drawer>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: IAppState) => ({
  open: state.navigation.open,
})

const mapDispatchToProps = {
  toggleNavigation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
