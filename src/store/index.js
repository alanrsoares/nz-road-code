import { createStore, applyMiddleware } from 'redux'

import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers'

const createStoreWithMiddlewares = (...middlewares) =>
  applyMiddleware(...middlewares)(createStore)

export default function configure(initialState) {
  return createStoreWithMiddlewares(
    loggerMiddleware
  )(rootReducer, initialState)
}
