import { combineReducers } from 'redux'
import navigation, { INavigationState } from './navigation'

export interface IAppState {
  readonly navigation: INavigationState
}

export default combineReducers<IAppState>({
  navigation,
})
