import projectsReducer from './projectsReducer'
import modalReducer from './modalReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    projects: projectsReducer,
    modal: modalReducer
})