import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'

const INITIAL_STATE = 0

export const actionHandlers = {
  [types.CONFIRM_ANSWER]: state => state + 1
}

export default handleActions(actionHandlers, INITIAL_STATE)
