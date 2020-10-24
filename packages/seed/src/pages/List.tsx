import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import Table from '../components/list/Table'

interface IListProps extends RouteComponentProps {
  data: boolean
}

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const List: FC<IListProps> = ({ location }: IListProps) => {
  const { pathname } = location
  const model = pathname.slice(1)
  const modelTitle = model && model[0].toUpperCase() + model.slice(1)

  const { container } = useStyles()
  return (
    <Container className={container}>
      {modelTitle}
      <Table />
    </Container>
  )
}

export { List }
