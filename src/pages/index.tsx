import React from "react";
import Navigation from "../components/navigation";
import {NextPage, NextPageContext, NextComponentType} from "next";
import {Posts} from "../interfaces/posts";
import Link from "next/link";

interface indexPageProps {
    posts : Posts[]
}

const Home = ({posts} : indexPageProps) => {
    return( 
        <>
        <Navigation/>
            <div>   
                <h1> Home page </h1>
                <h2>Last posts </h2>
                <ul>
                {posts? posts.map((post) => <li key={post.id}><Link href={`/posts/${post.id}`}><a><h3> Title {post.title}</h3> <p> {post.body}</p></a></Link> </li>): <h2>Loading...</h2>}
                </ul>
            </div>
        </>
    );
};

Home.getInitialProps = async ({req}: NextPageContext)=>{
    console.log(req);
    if(!req){ 
        return{posts : null};
    }  
    var result: Posts[] = await ( await fetch("https://simple-blog-api.crew.red/posts")).json();
    return{posts : result}
};

export default Home;