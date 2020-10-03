import { ActionCreator, AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from '../reducers'

export const FILTER_TOGGLE = 'FILTER_TOGGLE'

export interface IFilterToggleAction extends AnyAction {
  open: boolean
}

export type IFilterToggleActionCreater = ActionCreator<ThunkAction<IFilterToggleAction, IAppState, null, AnyAction>>

export const filterToggle: IFilterToggleActionCreater = () => (dispatch, getState): IFilterToggleAction => {
  const { open } = getState().filter
  return dispatch({
    type: FILTER_TOGGLE,
    open: !open
  })
}
