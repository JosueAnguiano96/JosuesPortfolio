import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Git} from './../iconos/github.svg'

const Footer = () => {
    return ( 
        <Container>
            <a target="_blank" rel="noreferrer" href="https://github.com/JosueAnguiano96">
                <GithubIcono />
            </a>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`;

const GithubIcono = styled(Git)`
    width: 50px;
    height: 50px;
    fill: #fff;
`;
 
export default Footer;