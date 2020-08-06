import React from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import {Posts} from "../interfaces/posts";
import Link from "next/link";

interface indexPageProps {
    posts : Posts[]
}

const Ul = styled.ul`
    margin : 0 auto;
    align-text : center;
    list-style: none;
    display: grid;
    grid-template-rows: 150px 150px 150px;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 20px;
`

const Li = styled.li`
    font-size: 20px;
    padding: .5em;
    background: gold;
    text-align: center;
`

const A = styled.a`
    text-decoration : none;
`


const Home: Next.Page = ({posts} : indexPageProps) => {
    return( 
        <>
        <Navigation/>
            <div>   
                <h1> Home page </h1>
                <h2>Last posts </h2>
                <Ul>
                {posts? posts.map((post) => 
                    <Li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <A>
                                <h3> Title {post.title}</h3> 
                                <p> {post.body}</p>
                            </A>
                        </Link> 
                    </Li>): <h2>Loading...</h2>}
                </Ul>
            </div>
        </>
    );
};

Home.getInitialProps = async ()=>{
    const result: Posts[] = await ( await fetch("https://simple-blog-api.crew.red/posts")).json();
    return{posts : result}
};

export default Home;