import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'
import { get } from '../api/questions'

const INITIAL_STATE = get()

export const actionHandlers = {
  [types.SELECT_ANSWER]: (state, { payload }) => ({
    ...state,
    [payload.index]: state[payload.index].selectAnswer(payload.answer)
  })
}

export default handleActions(actionHandlers, INITIAL_STATE)
