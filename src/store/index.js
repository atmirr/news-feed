import {createStore, applyMiddleware} from 'redux'
import appReducer from './reducers'
//import initialStates from '../initialStates.json'
import thunk from 'redux-thunk'

export default applyMiddleware(thunk)(createStore)(appReducer)