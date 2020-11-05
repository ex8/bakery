import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const FourOhFour: FC = () => {
  return (
    <div>
      FourOhFour
    </div>
  )
}

export { FourOhFour }
