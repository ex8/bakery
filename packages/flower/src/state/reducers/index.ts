import { combineReducers } from 'redux'
import navigation, { INavigationState } from './navigation'
import cart, { ICartState } from './cart'
import filter, { IFilterState } from './filter'

export interface IAppState {
  readonly navigation: INavigationState
  readonly cart: ICartState
  readonly filter: IFilterState
}

export default combineReducers<IAppState>({
  navigation,
  cart,
  filter,
})
