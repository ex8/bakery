import React from 'react'
import { List } from '@material-ui/core'
import NavigationItem from './NavigationItem'
import { INavigationItem } from './Navigation'

export interface INavigationItemsProps {
  items: INavigationItem[]
}

const NavigationItems: React.FC<INavigationItemsProps> = ({ items }: INavigationItemsProps) => (
  <List>
    {items.map((item, index: number) => <NavigationItem key={index} item={item} />)}
  </List>
)

export default NavigationItems
