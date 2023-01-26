import React from 'react'
import CartWidget from './CartWidget'
import styled from 'styled-components'
function NavBar() {
    return (
        <>
            <NavContainer>
                <h2>Tienda <span>Noutac</span></h2>
                <div>
                    <a href="/">Home</a>
                    <a href="/">Abound</a>
                    <a href="/">Contact</a>
                    <a href="/">Blog</a>
                    <a href="/"><CartWidget /></a>
                </div>
            </NavContainer>

        </>
    )
}

export default NavBar

const NavContainer = styled.nav`

h2{
color:white;
font-weight: 480;
    span{
    font-weight:bold;
    }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color:white;
    text-decoration:none;
    margin-right: 1rem;
}
`


