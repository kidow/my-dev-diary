import { Map, List } from 'immutable'
import { handleActions, createAction } from 'redux-actions'
import { pender } from 'redux-pender'
import * as api from '../api'

const GET_TODOS = 'todos/GET_TODOS'
const POST_TODOS = 'todos/POST_TODOS'

export const getTodos = createAction(GET_TODOS, api.getTodos)
export const postTodos = createAction(POST_TODOS, api.postTodos)

const initialState = Map({
  todoId: '',
  todos: List(),
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
  })
}, initialState)