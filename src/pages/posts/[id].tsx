import React from "react";
import Navigation from "../../components/navigation";
import styled from "styled-components";
import {Post} from "../../interfaces/post";
import { NextPageContext } from "next";

interface PostPage{
    result: Post
}

const H1 = styled.h1`
margin: 0 auto;
text-align : center;
`;

const Div = styled.div`
    border : 2px solid black;
    margin: 0 auto;
    text-align : center;
`;

const PostPage: Next.Page = ({result}: PostPage) => {
    return(
        <div>
            <Navigation/>
            <H1>Post page</H1>
            <Div> 
                <h3>{result.title}</h3>
                <p>{result.body}</p>
            </Div>
        </div>
    );
}

PostPage.getInitialProps = async (ctx: NextPageContext) =>{ 
    const result = await (await fetch("https://simple-blog-api.crew.red/posts/"+ctx.query.id)).json()
    return {result};
}; 

export default PostPage;