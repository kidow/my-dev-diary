import { Map } from 'immutable'
import { handleActions, createAction } from 'redux-actions'

const INITIALIZE = 'input/INITIALIZE' // 새 창이 떴을 때 인풋 초기화
const SET_INPUT = 'input/SET_INPUT'
const TOGGLE = 'input/TOGGLE'

export const setInput = createAction(SET_INPUT)
export const initialize = createAction(INITIALIZE)
export const toggle = createAction(TOGGLE)

const initialState = Map({
  value: '',
  learned: false
})

export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  },
  [TOGGLE]: (state, action) => {
    return state.update('learned', learned => !learned)
  }
}, initialState);