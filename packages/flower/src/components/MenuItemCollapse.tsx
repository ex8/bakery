import React from 'react'
import { Collapse, CardContent, Typography } from '@material-ui/core'

export interface IMenuItemCollapseProps {
  expanded: boolean
}

const MenuItemCollapse: React.FC<IMenuItemCollapseProps> = ({ expanded }: IMenuItemCollapseProps) => (
  <Collapse in={expanded} timeout='auto' unmountOnExit>
    <CardContent>
      <Typography variant='h6'>Ingredients</Typography>
      <Typography variant='body2' paragraph>ingredient descriptions</Typography>
    </CardContent>
  </Collapse>
)

export default MenuItemCollapse
