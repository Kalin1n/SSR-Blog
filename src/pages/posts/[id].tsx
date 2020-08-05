import React from "react";
import Navigation from "../../components/navigation";
import {Post} from "../../interfaces/post";
import { NextPageContext } from "next";

interface PostPage{
    result: Post
}

function PostPage({result}: PostPage){
    return(
        <div>
            <Navigation/>
            <h1>Post page</h1>
            <div> 
                <h3>{result.title}</h3>
                <p>{result.body}</p>
            </div>
        </div>
    );
};

PostPage.getInitialProps = async (ctx: NextPageContext) =>{ 
    var result = await (await fetch("https://simple-blog-api.crew.red/posts/"+ctx.query.id)).json()
    return {result};
}; 

export default PostPage;