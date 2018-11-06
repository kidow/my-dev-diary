import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { pender } from 'redux-pender'
import * as api from '../api'

const TOGGLE = 'todos/TOGGLE'
const GET_TODOS = 'todos/GET_TODOS'
const POST_TODOS = 'todos/POST_TODOS'

export const toggle = createAction(TOGGLE)
export const getTodos = createAction(GET_TODOS, api.getTodos)
export const postTodos = createAction(POST_TODOS, api.postTodos)

const initialState = Map({
  todoId: '',
  todos: List(),
  completed: false
})

export default handleActions({
  ...pender({
    type: GET_TODOS,
    onSuccess: (state, action) => {
      const { data: todos } = action.payload
      return state.set('todos', todos)
    }
  }),
  ...pender({
    type: POST_TODOS,
    onSuccess: (state, action) => {
      const { data: _id } = action.payload
      return state.set('todoId', _id)
    }
  }),
  [TOGGLE]: (state, action) => {
    return state.update('completed', completed => !completed)
  }
}, initialState)