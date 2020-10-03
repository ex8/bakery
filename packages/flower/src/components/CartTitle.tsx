import React from 'react'
import { Typography, Grid, Tooltip, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { cartClearDialogToggle, ICartClearDialogToggleAction } from '../state/actions'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface ICartTitleProps {
  text: string
  cartClearDialogToggle: () => ICartClearDialogToggleAction
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: theme.spacing(3),
    color: 'inherit',
  },
}))

const CartTitle: React.FC<ICartTitleProps> = ({ text, cartClearDialogToggle }: ICartTitleProps) => {
  const { title } = useStyles()
  return (
    <Grid container className={title} justify='space-between' alignItems='center'>
      <Grid item>
        <Typography variant='h5'>{text}</Typography>
      </Grid>
      <Grid item>
        <Tooltip title='Clear' arrow>
          <IconButton onClick={() => cartClearDialogToggle()}>
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = {
  cartClearDialogToggle,
}

export default connect(null, mapDispatchToProps)(CartTitle)
