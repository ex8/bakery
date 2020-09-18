import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleNavigation, IToggleNavigationAction } from '../state/actions'

export interface INavigationItem {
  label: string
  to: string
  icon: ReactElement
}

export interface INavigationItemsProps {
  items: INavigationItem[]
}

export interface INavigationItemProps {
  item: INavigationItem
  toggleNavigation: () => IToggleNavigationAction
}

const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const NavigationItem: React.FC<INavigationItemProps> = ({ item, toggleNavigation }: INavigationItemProps) => {
  const { label, to, icon } = item
  const { link } = useStyles()
  return (
    <Link className={link} to={to}>
      <ListItem button onClick={() => toggleNavigation()}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  )
}

const mapDispatchToProps = {
  toggleNavigation,
}

export default connect(null, mapDispatchToProps)(NavigationItem)