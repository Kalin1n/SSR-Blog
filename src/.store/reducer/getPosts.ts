import {GET_ALL_POSTS_STATUS} from "../actions/types";

const initialState = { 
    posts : []
}; 


const reducer = (state = initialState, action )=>{
    switch(action.type){
        case GET_ALL_POSTS_STATUS: 
            return{...state, posts : action.payload}
        default: 
            return state; 
    }
}; 

export default reducer;