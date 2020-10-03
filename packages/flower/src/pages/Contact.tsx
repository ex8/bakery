import React from 'react'
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
      <h2>Contact</h2>
    </div>
  )
}

export { Contact }
