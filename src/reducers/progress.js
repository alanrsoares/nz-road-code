import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'

const INITIAL_STATE = {
  position: 0,
  wrongAnswers: 0
}

export const actionHandlers = {
  [types.CONFIRM_ANSWER]: (state, { payload }) => ({
    ...state,
    position: state.position + 1,
    wrongAnswers: state.wrongAnswers + +!payload.isCorrect
  })
}

export default handleActions(actionHandlers, INITIAL_STATE)
