import input from './input'
import todos from './todos'

import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  input,
  todos,
  pender: penderReducer
})