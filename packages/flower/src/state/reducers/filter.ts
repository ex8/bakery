import { AnyAction } from 'redux'
import { FILTER_TOGGLE } from '../actions'

export interface IFilterState {
  open: boolean
}

const INITIAL_STATE: IFilterState = {
  open: false,
}

export default function (state: IFilterState = INITIAL_STATE, action: AnyAction): IFilterState {
  switch (action.type) {
    case FILTER_TOGGLE:
      return { ...state, open: action.open }
    default:
      return state
  }
}
