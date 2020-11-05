import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { TextField, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}))

const Form: FC = () => {
  return (
    <div>
      <TextField
        variant='outlined'
        label='Email'
        InputProps={{
          endAdornment: (
            <IconButton>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          )
        }}
        fullWidth
      />
      <TextField
        variant='outlined'
        label='S'
        InputProps={{
          endAdornment: (
            <IconButton>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          )
        }}
        fullWidth
      />
    </div>
  )
}

export { Form }
