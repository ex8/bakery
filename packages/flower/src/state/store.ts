import { createStore, applyMiddleware, compose, StoreEnhancer, Store } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dev = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const enhancers: StoreEnhancer = compose(applyMiddleware(thunk), dev)

const store: Store = createStore(reducers, enhancers)

export default store
