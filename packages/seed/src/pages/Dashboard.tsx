import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { To } from '../routes'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const Dashboard: FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      dashb
      <To to='/orders'>yes</To>
    </Container>
  )
}

export { Dashboard }
