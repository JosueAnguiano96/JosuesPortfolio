import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
    return ( 
        <>
            <Helmet>
            <title>Josue Anguiano</title>
            </Helmet>

            <DivCompleto>
                <ContenedorNombre>
                <ScrollAnimation animateIn='fadeIn'>
                    <Nombre>Hello! I´m Josué Anguiano</Nombre>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn' delay={500}>
                    <Texto>Web Developer </Texto>
                </ScrollAnimation>
                </ContenedorNombre>
            </DivCompleto>
        </>
    );
}

const DivCompleto = styled.div`
    background: linear-gradient(90deg, rgba(0,59,255,1) 0%, rgba(0,24,105,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: calc(100vh - 148px);
    position: relative;
`;

const ContenedorNombre = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    max-width: 900px;
`;

const Nombre = styled.h1`
    color: #fff;
    margin-bottom: 25px;
    margin-top: 0;
    font-size: 60px;
`;

const Texto = styled.p`
    color: #fff;
    margin-bottom: 25px;
    margin-top: 0;
    font-size: 25px;
`;
 
export default Home;