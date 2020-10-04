import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))


const FourOhFour: React.FC = () => {
  const { container } = useStyles()
  return (
    <Container className={container}>
      <h2>FourOhFour</h2>
    </Container>
  )
}

export { FourOhFour }
