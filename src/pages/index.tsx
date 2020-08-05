import React, {useState, useEffect} from "react";
import Navigation from "../components/navigation";
import {NextPage} from "next";
import Link from "next/link";

const Home : NextPage = ({posts}) => {
    return(
        <>
        <Navigation/>
            <div>   
                <h1> Home page </h1>
                <h2>Last posts </h2>
                <ul>
                {posts.map((post) => <li key={post.id}><Link href={`/posts/${post.id}`}><a><h3> Title {post.title}</h3> <p> {post.body}</p></a></Link> </li>)}
                </ul>
            </div>
        </>
    );
};

Home.getInitialProps = async ()=>{
    var result = await ( await fetch("https://simple-blog-api.crew.red/posts")).json();
    return{posts : result}
};

export default Home;