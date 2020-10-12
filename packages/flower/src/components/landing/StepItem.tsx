import React, { FunctionComponent, FC } from 'react'
import { Typography, Card, CardHeader, CardContent, SvgIcon, Avatar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

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
  icon: {
    width: '100%',
    height: '100%',
  },
  card: {
    padding: theme.spacing(4),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const StepItem: FC<IStepItemProps> = ({ item }: IStepItemProps) => {
  const { step, Icon, viewBox, description } = item
  const { icon, card, avatar } = useStyles()
  return (
    <Card className={card}>
      <CardHeader avatar={<Avatar className={avatar}>{step}</Avatar>} />
      <CardContent>
        <SvgIcon classes={{ root: icon }} component={Icon} viewBox={viewBox} />
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default StepItem
