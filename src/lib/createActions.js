import { createAction } from 'redux-actions'

import { camelize } from './utils'

export default function bindActionsTypes (actionTypes, transform = camelize) {
  return Object.keys(actionTypes)
    .reduce((acc, type) => ({
      ...acc, [transform(type)]: createAction(type)
    }), {})
}
