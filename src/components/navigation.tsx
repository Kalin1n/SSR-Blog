import React from "react"; 
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
    width : 1000px;
    display : flex;
    font-size : 25px;
    align-items : space-between;
    background-color : red;
`

const A = styled.a`
    decoration : none;
    color : blue
`

function Navigation(){
    return(
        <Nav> 
            <Link href="/"><A>Home</A></Link>
            <Link href="/posts/new"><A>Create post</A></Link>
        </Nav>
    )
}

export default Navigation;