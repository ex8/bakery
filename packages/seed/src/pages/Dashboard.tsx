import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { TopBar } from '../components'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const Dashboard: FC = () => {
  return (
    <div>
      <TopBar />
      Dashboard
    </div>
  )
}

export { Dashboard }
