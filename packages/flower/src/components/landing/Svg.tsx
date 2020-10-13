import React, { FC, ElementType } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SvgIcon } from '@material-ui/core'

interface ISvgProps {
  component: ElementType
  viewBox: string
  fontSize?: 'inherit' | 'default' | 'small' | 'large'
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
}))

const Svg: FC<ISvgProps> = ({ component, viewBox, fontSize }: ISvgProps) => {
  const { root } = useStyles()
  return <SvgIcon classes={{ root }} component={component} fontSize={fontSize} viewBox={viewBox} />
}

export { Svg }
