import React, { FunctionComponent, FC } from 'react'
import { Typography, Card, CardHeader, CardContent, Avatar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Svg } from '../landing'

export interface IStepItem {
  step: number
  Icon: FunctionComponent
  viewBox: string
  description: string
}

interface IStepItemProps {
  item: IStepItem
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const StepItem: FC<IStepItemProps> = ({ item }: IStepItemProps) => {
  const { step, Icon, viewBox, description } = item
  const { card, avatar } = useStyles()
  return (
    <Card className={card}>
      <CardHeader avatar={<Avatar className={avatar}>{step}</Avatar>} />
      <CardContent>
        <Svg component={Icon} viewBox={viewBox} />
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default StepItem
