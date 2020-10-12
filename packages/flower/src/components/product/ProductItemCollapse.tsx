import React, { FC } from 'react'
import { Collapse, CardContent, Typography } from '@material-ui/core'

export interface IProductItemCollapseProps {
  expanded: boolean
}

const ProductItemCollapse: FC<IProductItemCollapseProps> = ({ expanded }: IProductItemCollapseProps) => (
  <Collapse in={expanded} timeout='auto' unmountOnExit>
    <CardContent>
      <Typography variant='h6'>Ingredients</Typography>
      <Typography variant='body2' paragraph>ingredient descriptions</Typography>
    </CardContent>
  </Collapse>
)

export default ProductItemCollapse
