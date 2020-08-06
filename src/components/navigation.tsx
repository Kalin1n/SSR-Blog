import React from "react"; 
import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";


const Nav = styled.nav`
    display : flex;
    width : 100%;
    height : 25px;
    background-color : grey;
    justify-content : space-arround;
`

const ALink = styled.a`
    color : white;
`

function Navigation(){
    var router = useRouter()

    return(
        <Nav> 
            <Link href="/" passHref><ALink>Home</ALink></Link>
            <Link href="/posts/new" passHref><ALink>Create post</ALink></Link>
        </Nav>
    )
}

export default Navigation;