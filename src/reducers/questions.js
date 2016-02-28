import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'

type question = {
  
}

const INITIAL_STATE = []

const actionHandlers = {
  [types.LOAD_QUESTIONS_SUCCESS]: (state, { payload }) => ([
    ...state,
    ...payload
  ])
}

export default handleActions(actionHandlers, INITIAL_STATE)
