import React, {useState} from "react";
import styled from "styled-components";
import Navigation from "../../components/navigation";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
`; 

function NewPostPage(){
    let [title, setTitle] = useState("");
    let [text, setText] = useState("");
    let [loading, setLoading] = useState(false);

    let handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    let handleTextChange = (event) => {
        setText(event.target.value);
    };
    let handleSubmit = async (event) =>{
        setLoading(true);
        event.preventDefault();
        console.log(title, text);
        if(title.length>0 && text.length>0){
                var response = await fetch("https://simple-blog-api.crew.red/posts", { 
                    method : "POST", 
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({ 
                        title,
                        body : text
                    })
                });
            console.log("Response : ", response);   
            setLoading(false);     
        }else{ 
            setLoading(false);
            console.log("Empty values");
        }
    };

    return(
        <div>
            <Navigation/>
            <h1> New Post page </h1>
            {loading? <h2>Laoding...</h2> : <></>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleTitleChange} placeholder="title"/>
                <textarea value={text} onChange={handleTextChange} placeholder="Body"/>
                <Button type="submit">Create</Button>
            </form>
        </div>
    );
}; 

export default NewPostPage;