import React from 'react'
import { List } from '@material-ui/core'
import NavigationItem from './NavigationItem'
import { INavigationItem } from './Navigation'

export interface INavigationItemListProps {
  items: INavigationItem[]
}

const NavigationItemList: React.FC<INavigationItemListProps> = ({ items }: INavigationItemListProps) => (
  <List>
    {items.map((item, index: number) => <NavigationItem key={index} item={item} />)}
  </List>
)

export default NavigationItemList
