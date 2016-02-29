import { handleActions } from 'redux-actions'

import * as types from '../constants/actionTypes'
import { get } from '../api/questions'

const withExtraProps = question => ({
  ...question,
  selectedAnswer: ''
})

const INITIAL_STATE = get().map(withExtraProps)

const actionHandlers = {
  [types.LOAD_QUESTIONS_SUCCESS]: (state, { payload }) => ([
    ...state,
    ...payload
  ]),
  [types.SELECT_OPTION]: (state, { payload }) => ({

  })
}

export default handleActions(actionHandlers, INITIAL_STATE)
