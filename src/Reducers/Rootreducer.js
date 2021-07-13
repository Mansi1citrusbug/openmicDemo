import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'


const RootReducer = combineReducers({
 
  feild: LoginReducer,
 
})

export default RootReducer