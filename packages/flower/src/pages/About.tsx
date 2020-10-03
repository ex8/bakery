import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))


const About: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <h2>About</h2>
    </div>
  )
}

export { About }
