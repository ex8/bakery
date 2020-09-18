import { AnyAction } from 'redux'
import { NAVIGATION_TOGGLE } from '../actions'

export interface INavigationState {
  open: boolean
}

const INITIAL_STATE: INavigationState = {
  open: false,
}

export default function (state: INavigationState = INITIAL_STATE, action: AnyAction): INavigationState {
  switch (action.type) {
    case NAVIGATION_TOGGLE:
      return { ...state, open: action.open }
    default:
      return state
  }
}
