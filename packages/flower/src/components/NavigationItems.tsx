import React, { ReactElement } from 'react'
import { List } from '@material-ui/core'
import NavigationItem from './NavigationItem'

export interface INavigationItem {
  label: string
  to: string
  icon: ReactElement
}

export interface INavigationItemsProps {
  items: INavigationItem[]
}

const NavigationItems: React.FC<INavigationItemsProps> = ({ items }: INavigationItemsProps) => (
  <List>
    {items.map((item, index: number) => <NavigationItem key={index} item={item} />)}
  </List>
)

export default NavigationItems
