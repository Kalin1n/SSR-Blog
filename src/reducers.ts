import { combineReducers } from 'redux'
import * as types from './types'

const initialGetPosts = {
    posts: [],
    status: '',
}

const initialCreatePost = {
    title: '',
    body: '',
    status: '',
}

const postsReducer = (state = initialGetPosts, action) => {
    switch (action.type) {
        case types.GET_ALL_POSTS:
            return { ...state, status: action.status, posts: action.payload }
        default:
            return state
    }
}

const createPostReducer = (state = initialCreatePost, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return { ...state, title: action.payload }
        case types.CHNAGE_BODY:
            return { ...state, body: action.payload }
        case types.SEND_POST:
            return { ...state, status: action.status }
        default:
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    get: postsReducer,
    create: createPostReducer,
}

export default combineReducers(reducers)
