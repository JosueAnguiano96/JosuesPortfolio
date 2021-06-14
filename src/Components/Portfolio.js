import React from 'react';
import styled from 'styled-components';
import theme from './../theme'
import aureo from './../images/aureo.png'
import mySite from './../images/mySite.png'
import chapter from './../images/chapter.png'
import gastos from './../images/gastos.png'
import {ReactComponent as Visit} from './../iconos/visit.svg'
import {Helmet} from 'react-helmet';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
    

const infoPages = [
    {
        name: 'This site',
        image: mySite,
        url: '/home'
    },
    {
        name: 'Áureo Website (Rock band from Saltillo)',
        image: aureo,
        url: 'https://aureo-band.web.app/'
    },
    {
        name: 'Spending App',
        image: gastos,
        url: 'https://app-lista-gastos-33867.web.app/iniciar-sesion'
    },
    {
        name: 'Student chapter of systems and informatics',
        image: chapter,
        url: 'https://github.com/JosueAnguiano96/capituloSistemas'
    }
]

const Portfolio = () => {
    return (
        <>

            <Helmet>
            <title>Josue Anguiano</title>
            </Helmet>

        <DivCardContainer >
        {infoPages.map( (item, index) => {
            return (
                <ScrollAnimation animateIn='backInUp' key={index} >
                    <Card >
                        <CardTitle>{item.name}</CardTitle>
                        <Image src={item.image} alt={item.image}/>
                        <ViewSite target="_blank" rel="noreferrer" href={item.url}>Visit site <Visit /></ViewSite>
                    </Card>
                </ScrollAnimation>
            )
        })}
        </DivCardContainer>

        </>
    );
}

const DivCardContainer = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin: auto;
        width: 80%;
    
    @media (min-width: 950px){
        margin: auto;
        width: 80%;
    }
`;

const Card = styled.div`
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px #000;
    padding: 30px;
    margin: 20px;
    border-top: 3px solid ${theme.azul};
    width: auto;
    transition: 0.1s linear;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;


    &:hover{
        padding-top: -10px;
        border-top: 8px solid ${theme.azul};

    }
`;

const Image = styled.img`
    width: 60%;
    height: auto;
    padding-top: 15px;
`;

const CardTitle = styled.h1`
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
`;

const ViewSite = styled.a`
    padding-top: 15px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    font-size: 20px;

    &:hover{
        color: ${theme.azul}
    }

`;

export default Portfolio;