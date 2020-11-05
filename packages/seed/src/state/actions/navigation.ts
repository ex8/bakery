import { ActionCreator, AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from '../reducers'

export const NAVIGATION_TOGGLE = 'NAVIGATION_TOGGLE'

export interface INavigationToggleAction extends AnyAction {
  open: boolean
}

export type INavigationToggleActionCreater = ActionCreator<ThunkAction<INavigationToggleAction, IAppState, null, AnyAction>>

export const navigationToggle: INavigationToggleActionCreater = () => (dispatch, getState): INavigationToggleAction => {
  const { open } = getState().navigation
  return dispatch({
    type: NAVIGATION_TOGGLE,
    open: !open
  })
}
