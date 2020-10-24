import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))

const FourOhFour: FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      4444
    </Container>
  )
}

export { FourOhFour }
