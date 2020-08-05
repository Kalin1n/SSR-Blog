import React from "react"; 
import styled from "styled-components";
import Link from "next/link";



function Navigation(){
    return(
        <nav> 
            <Link href="/"><a>Home</a></Link>
            <Link href="/posts/new"><a>Create post</a></Link>
        </nav>
    )
}

export default Navigation;