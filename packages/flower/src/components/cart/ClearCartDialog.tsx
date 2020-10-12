import React, { FC } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@material-ui/core'
import { connect } from 'react-redux'
import { IAppState } from '../../state/reducers'
import { cartClearDialogToggle, ICartClearDialogToggleAction } from '../../state/actions'

interface IClearCartDialogProps {
  clearDialogOpen: boolean
  cartClearDialogToggle: () => ICartClearDialogToggleAction
}

const ClearCartDialog: FC<IClearCartDialogProps> = ({ clearDialogOpen, cartClearDialogToggle }: IClearCartDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Dialog open={clearDialogOpen} onClose={() => cartClearDialogToggle()} fullScreen={fullScreen}>
      <DialogTitle>Clear Items</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Please be sure you want all items removed from your cart 
          before proceeding, this action cannot be undone.
        </DialogContentText>
        <DialogContentText>
          This action will remove 5 items from your cart.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={() => cartClearDialogToggle()}>
          Clear Items
      </Button>
        <Button variant='contained' color='default' onClick={() => cartClearDialogToggle()}>
          Cancel
      </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = (state: IAppState) => ({
  clearDialogOpen: state.cart.clearDialogOpen,
})

const mapDispatchToProps = {
  cartClearDialogToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCartDialog)
