import {combineReducers} from "redux"; 

import getAllPostsReducer from "./getPosts";

const rootReducer = combineReducers({
    getPosts : getAllPostsReducer
});

export default rootReducer;