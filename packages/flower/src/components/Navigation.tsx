import React from 'react'
import { Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { navigationToggle, INavigationToggleAction } from '../state/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import NavigationItems, { INavigationItem } from './NavigationItems'

interface INavigationProps {
  open: boolean
  navigationToggle: () => INavigationToggleAction
}

const useStyles = makeStyles(() => ({
  drawer: {
    flexShrink: 0,
  },
  paper: {
    width: 215,
  },
}))

const Navigation: React.FC<INavigationProps> = ({ open, navigationToggle }: INavigationProps) => {
  const items: INavigationItem[] = [
    { label: 'Home', to: '/', icon: <FontAwesomeIcon icon={faHome} /> },
    { label: 'Menu', to: '/menu', icon: <FontAwesomeIcon icon={faList} /> },
    { label: 'Contact', to: '/contact', icon: <FontAwesomeIcon icon={faPhoneAlt} /> },
  ]
  const { drawer, paper } = useStyles()
  return (
    <Drawer className={drawer} classes={{ paper }} open={open} onClose={() => navigationToggle()}>
      <NavigationItems items={items} />
    </Drawer>
  )
}

const mapStateToProps = (state: IAppState) => ({
  open: state.navigation.open,
})

const mapDispatchToProps = {
  navigationToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
