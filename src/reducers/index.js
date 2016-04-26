import { combineReducers } from 'redux'
import questions from './questions'
import progress from './progress'

export default combineReducers({
	questions,
	progress
})
