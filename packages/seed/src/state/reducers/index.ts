import { combineReducers } from 'redux'
import navigation, { INavigationState } from './navigation'
import cart, { ICartState } from './cart'

export interface IAppState {
  readonly navigation: INavigationState
  readonly cart: ICartState
}

export default combineReducers<IAppState>({
  navigation,
  cart,
})
