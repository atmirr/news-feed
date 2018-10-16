import {createStore, applyMiddleware} from 'redux'
import appReducer from './reducers'
//import initialStates from '../initialStates.json'
import thunk from 'redux-thunk'
import {batchDispatchMiddleware} from 'redux-batched-actions';

const consoleMessages = store => next => action => {

    console.groupCollapsed(`Action: ${action.type}`);

    //Dispatch Triggered
    let result = next(action)

    console.log(store.getState())
    console.groupEnd();

    return result

}

export default applyMiddleware(batchDispatchMiddleware, thunk, consoleMessages)(createStore)(appReducer)