import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}))


const FourOhFour: React.FC = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <h2>FourOhFour</h2>
    </div>
  )
}

export { FourOhFour }
