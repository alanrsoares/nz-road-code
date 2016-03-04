import { combineReducers } from 'redux'
import questions from './questions'
import position from './position'

export default combineReducers({
	questions,
	position
})
