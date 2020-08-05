import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {writePost, changeTitle, changeBody} from "../../actions";
import Navigation from "../../components/navigation";



function NewPostPage(){
    let status = useSelector(state => state.create.status);
    let title = useSelector(state => state.create.title);
    let body = useSelector(state => state.create.body);
    var dispatch = useDispatch();
    let handleSubmit = (event) =>{
        event.preventDefault();
        if(title.length>0 && body.length>0){
            dispatch(writePost(title, body));    
        }else{ 
            console.log("Empty values");
        }
    };  

    return(
        <div>
            <Navigation/>
            <h1> New Post page </h1>
            {status !== "Resolved" ? <h2>Loading...</h2> : <></>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={()=> dispatch(changeTitle(event.target).value)} placeholder="title"/>
                <textarea value={body} onChange={()=> dispatch(changeBody(event.currentTarget.value))} placeholder="Body"/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}; 

export default NewPostPage;