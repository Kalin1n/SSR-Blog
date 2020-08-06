import * as types from './types'
import axios from "axios";

// Get posts function 
export function getPosts(){
  return async (dispatch) => {  
      dispatch({status : "Pending", type :  types.GET_ALL_POSTS}); 
      const data = await axios.get("https://simple-blog-api.crew.red/posts");
      dispatch({status : "Resolved", type : types.GET_ALL_POSTS, payload : data.data})
      return;
  }
}

// Change title of new post and write value to store 
export const changeTitle = (value: string) => ({
  type : typeof types.CHANGE_TITLE, 
  payload : value
});

// Change body of new post and write value to store 
export const changeBody = (value: string) => ({
  type : typeof types.CHNAGE_BODY, 
  payload : value
});

// Create post function 
export function writePost(title: string, body: string){
  return async(dispatch) => {
      dispatch({status: "Pending", type : types.SEND_POST})
      const response = await axios.post("https://simple-blog-api.crew.red/posts",  {title : title, body : body});
      if(response.status === 201){ 
        dispatch({status : "Resolved", type : types.SEND_POST})
      }
  };
}