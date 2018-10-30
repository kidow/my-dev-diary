import { List, Map } from 'immutable'
import { handleActions, createAction } from 'redux-actions'

const INSERT = 'INSERT'
const MODIFY = 'MODIFY'

export const insert = createAction(INSERT)
export const modify = createAction(MODIFY)

const initialState = List([])

export default handleActions({
  [INSERT]: (state, action) => {
    const { id, text } = action.payload
    return state.push(Map({
      id,
      text
    }))
  },
  [MODIFY]: (state, action) => {

  }
}, initialState)