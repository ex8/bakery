import { IToggleNavigationAction, TOGGLE_NAVIGATION } from '../actions'

export interface INavigationState {
  open: boolean
}

const INITIAL_STATE: INavigationState = {
  open: false,
}

export default function (state: INavigationState = INITIAL_STATE, action: IToggleNavigationAction): INavigationState {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return { ...state, open: action.open }
    default:
      return state
  }
}
