import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))


const Contact: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <Container>
        <h2>Contact</h2>
      </Container>
    </div>
  )
}

export { Contact }
