import { createStore, applyMiddleware } from 'redux'
import sagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const createStoreWithMiddlewares = (...middlewares) =>
  applyMiddleware(...middlewares)(createStore)

export default function configure(initialState) {
  return createStoreWithMiddlewares(
    sagaMiddleware(rootSaga)
  )(rootReducer, initialState)
}
