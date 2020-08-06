import React from 'react'
import Navigation from '../components/navigation'
import styled from 'styled-components'
import { Posts } from '../interfaces/posts'
import Link from 'next/link'

interface indexPageProps {
    posts: Posts[]
}

const Ul = styled.ul`
    margin: 0 auto;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 20em 20em 20em 20em;
    grid-gap: 20px;
`

const Li = styled.li`
    width: 100%;
    height: 100%;
    font-size: 20px;
    background: gold;
    text-align: center;
`

const A = styled.a`
    text-decoration: none;
`
const H1 = styled.h1`
    margin: 0 auto;
    text-align: center;
`

const Div = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
`
const Home: Next.Page = ({ posts }: indexPageProps) => {
    return (
        <>
            <Navigation />
            <H1> Home page </H1>
            <div>
                <h2>Last posts </h2>
                <Ul>
                    {posts ? (
                        posts.map((post) => (
                            <Li key={post.id}>
                                <Link href={`/posts/${post.id}`}>
                                    <A>
                                        <h3>{post.title}</h3>
                                        <p> {post.body}</p>
                                    </A>
                                </Link>
                            </Li>
                        ))
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </Ul>
            </div>
        </>
    )
}

Home.getInitialProps = async () => {
    const result: Posts[] = await (await fetch('https://simple-blog-api.crew.red/posts')).json()
    return { posts: result }
}

export default Home
