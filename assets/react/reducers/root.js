import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import mainReducer from '../reducers/main'

export default combineReducers({
  routing: routerReducer,
  main: mainReducer
})
