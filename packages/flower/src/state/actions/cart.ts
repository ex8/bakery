import { ActionCreator, AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from '../reducers'

export const CART_TOGGLE = 'CART_TOGGLE'
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_UPDATE_QUANTITY = 'CART_UPDATE_QUANTITY'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
export const CART_CLEAR = 'CART_CLEAR'

export interface ICartToggleAction extends AnyAction {
  open: boolean
}

export type ICartToggleActionCreater = ActionCreator<ThunkAction<ICartToggleAction, IAppState, null, AnyAction>>

export const cartToggle: ICartToggleActionCreater = () => (dispatch, getState): ICartToggleAction => {
  const { open } = getState().cart
  return dispatch({
    type: CART_TOGGLE,
    open: !open
  })
}
