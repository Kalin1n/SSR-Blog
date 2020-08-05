import React from "react";
import Navigation from "../../components/navigation";
function PostPage({result}){
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

PostPage.getInitialProps = async (ctx) =>{ 
    console.log("CTX ", ctx.query.id);
    var result = await (await fetch("https://simple-blog-api.crew.red/posts/"+ctx.query.id)).json()
    console.log(result);
    return {result};
}; 

export default PostPage;