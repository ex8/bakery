import { AnyAction } from 'redux'
import { CART_CLEAR_DIALOG_TOGGLE, CART_TOGGLE } from '../actions/cart'

export interface ICartState {
  open: boolean
  items: Record<string, unknown>
  clearDialogOpen: boolean
}

const INITIAL_STATE: ICartState = {
  open: false,
  items: {},
  clearDialogOpen: false,
}

export default function(state: ICartState = INITIAL_STATE, action: AnyAction): ICartState {
  switch (action.type) {
    case CART_TOGGLE:
      return { ...state, open: action.open }
    case CART_CLEAR_DIALOG_TOGGLE:
      return { ...state, clearDialogOpen: action.clearDialogOpen }
    default:
      return state
  }
}
