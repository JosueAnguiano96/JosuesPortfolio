import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import theme from './../theme'
import languages from './../data/languages.js'
import skills from './../data/skills'
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <>
            <Helmet>
                <title>Josue Anguiano</title>
            </Helmet>

            <Title>This is me</Title>
            <ScrollAnimation animateIn='fadeInUp'>
                <DivAbout>
                    <Text>I am characterized by my planning of objectives and the hard work that I put into them to be able to achieve them. I manifest ease of learning so I always want to know new things in order to grow always personally and professionally.</Text>
                </DivAbout>
            </ScrollAnimation>

            <Title>My skills</Title>
            <DivGrid>
            {skills.map( (item, index) => {
                return (
                    <ScrollAnimation animateIn='fadeInUp' key={index}>
                        <DivGridItem >
                            {item.icon}
                            <div/> 
                            <TextSkills>{item.name}</TextSkills>
                        </DivGridItem>
                    </ScrollAnimation>
                )
            })}
            </DivGrid>


            <Title>Languages</Title>

            <DivGrid >
            {languages.map( (item, index) => {
                return (
                    <ScrollAnimation animateIn='fadeInUp' key={index}>
                        <DivGridItem>
                            
                            <Image src={item.image}/>
                        </DivGridItem>
                    </ScrollAnimation>
                )
            })}
            </DivGrid>
        </> 
    );
}

const DivGrid = styled.div`
    max-width: 90%;
    margin: auto;
    display: grid;
    align-items: center;
    grid-row-gap: 40px;

    @media (min-width:768px){
      grid-template-columns:repeat(3,1fr);
      padding-top: 0;
      padding-bottom: 7.5rem;
      grid-row-gap: 80px;
  }

  svg{
      width: 50px;
      height: 50px;
  }
`;

const DivGridItem = styled.div`
    padding: 1.5rem;
    text-align:center;

    & > div{
        height: 20px;
        width: 10%;
        margin: auto;
        border-top: 5px solid ${theme.azul};
        transition: 0.1s linear;
        margin-top: 15px;
    }

    &:hover > div{
            width: 80%;
        }
    
`;

const Image = styled.img`
    width: 30%;
    padding-top: 30px;

    @media (min-width:768px){
        width: 150px;
        height: auto;
    }
`;

const Title = styled.h1`
    max-width: 90%;
    margin: auto;
    padding: 30px;
    text-align: center;
    font-size: 40px;
    color: ${theme.azul};
    text-transform: uppercase;

`;

const DivAbout = styled.div`
    width: 100%;
    max-width: 90%;
    margin: auto;
    padding: 20px 10px;
`;

const Text = styled.p`
    font-size: 25px;
    text-align: justify;

    @media (min-width:768px){
        font-size: 30px;
    }
`;

const TextSkills = styled.p`
    font-size: 25px;
    text-align: center;

    @media (min-width:768px){
        font-size: 30px;
    }
`;
 
export default About;