import {C} from '../constants'
import {combineReducers} from 'redux'

const allPosts = (state=[], action) => {
    switch (action.type) {
        case C.ADD_POST:
            return [
                ...state,
                {
                    "id" : state.length,
                    "title" : action.payload.title,
                    "description" : action.payload.description,
                    "dateCreated" : action.payload.dateCreated,
                    "thumbnailUrl" : action.payload.thumbnailUrl,
                    "tags" : action.payload.tags
                }
            ]

        case C.REMOVE_POST:
            return state.filter(item => item.id !== action.payload.id)

        default:
            return state
    }
}


export default combineReducers({allPosts})