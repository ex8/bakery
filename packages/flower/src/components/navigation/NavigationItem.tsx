import React, { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { connect } from 'react-redux'
import { navigationToggle, INavigationToggleAction } from '../../state/actions'
import { INavigationItem } from './Navigation'
import { To } from '../../routes'

interface INavigationItemProps {
  item: INavigationItem
  navigationToggle: () => INavigationToggleAction
}

const NavigationItem: FC<INavigationItemProps> = ({ item, navigationToggle }: INavigationItemProps) => {
  const { label, to, icon } = item
  return (
    <To to={to}>
      <ListItem button onClick={() => navigationToggle()}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </To>
  )
}

const mapDispatchToProps = {
  navigationToggle,
}

export default connect(null, mapDispatchToProps)(NavigationItem)
