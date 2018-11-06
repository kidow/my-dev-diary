import { Map } from 'immutable'
import { handleActions, createAction } from 'redux-actions'

const INITIALIZE = 'input/INITIALIZE' // 새 창이 떴을 때 인풋 초기화
const SET_INPUT = 'input/SET_INPUT'

export const setInput = createAction(SET_INPUT)
export const initialize = createAction(INITIALIZE)

const initialState = Map({
  value: ''
})

export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState);