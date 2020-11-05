import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { RouteComponentProps } from 'react-router-dom'

interface IListMatchParams {
  model: string
}

type IListProps = RouteComponentProps<IListMatchParams>

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const List: FC<IListProps> = ({ match }: IListProps) => {
  const { model } = match.params
  return (
    <div>
      {model}
    </div>
  )
}

export { List }
