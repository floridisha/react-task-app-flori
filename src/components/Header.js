import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <h1>Task App</h1>
        </Container>
    )
}

export default Header

const Container = styled.div`


    h1 {
        margin: 20px auto;
        text-align: center;
        padding: 10px 30px;
        color: #264653;
        background-color: #f4a261;
        width: 200px;
        border-radius: 10px;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.6);
        text-transform: uppercase;
    }
`