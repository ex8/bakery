import React, { FC } from 'react'
import { List } from '@material-ui/core'
import NavigationItem from './NavigationItem'
import { INavigationItem } from './Navigation'

interface INavigationItemListProps {
  items: INavigationItem[]
}

const NavigationItemList: FC<INavigationItemListProps> = ({ items }: INavigationItemListProps) => (
  <List>
    {items.map((item, index: number) => <NavigationItem key={index} item={item} />)}
  </List>
)

export default NavigationItemList
