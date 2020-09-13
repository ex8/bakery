import { ActionCreator, AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from '../reducers'

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION'

export interface IToggleNavigationAction extends AnyAction {
  open: boolean
}

export type IToggleNavigationActionCreater = ActionCreator<ThunkAction<IToggleNavigationAction, IAppState, null, AnyAction>>

export const toggleNavigation: IToggleNavigationActionCreater = () => (dispatch, getState): IToggleNavigationAction => {
  const { open } = getState().navigation
  return dispatch({
    type: TOGGLE_NAVIGATION,
    open: !open
  })
}
