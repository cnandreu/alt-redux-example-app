
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reduxz/root_reducer'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
