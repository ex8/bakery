import { AnyAction } from 'redux'
import { CART_TOGGLE } from '../actions/cart'

export interface ICartState {
  open: boolean
  items: Record<string, unknown>
}

const INITIAL_STATE: ICartState = {
  open: false,
  items: {},
}

export default function(state: ICartState = INITIAL_STATE, action: AnyAction): ICartState {
  switch (action.type) {
    case CART_TOGGLE:
      return { ...state, open: action.open }
    default:
      return state
  }
}
