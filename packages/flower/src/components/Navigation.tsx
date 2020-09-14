import React from 'react'
import { Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { IAppState } from '../state/reducers'
import { toggleNavigation, IToggleNavigationAction } from '../state/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faList, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import NavigationItems, { INavigationItem } from './NavigationItems'

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
  const items: INavigationItem[] = [
    { label: 'Home', to: '/', icon: <FontAwesomeIcon icon={faHome} /> },
    { label: 'About', to: '/about', icon: <FontAwesomeIcon icon={faBook} /> },
    { label: 'Menu', to: '/menu', icon: <FontAwesomeIcon icon={faList} /> },
    { label: 'Contact', to: '/contact', icon: <FontAwesomeIcon icon={faPhoneAlt} /> },
  ]
  const { drawer, paper } = useStyles()
  return (
    <Drawer className={drawer} classes={{ paper }} open={open} onClose={() => toggleNavigation()}>
      <NavigationItems items={items} />
    </Drawer>
  )
}

const mapStateToProps = (state: IAppState) => ({
  open: state.navigation.open,
})

const mapDispatchToProps = {
  toggleNavigation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
