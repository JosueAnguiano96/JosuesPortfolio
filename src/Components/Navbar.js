import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom'
import {ReactComponent as Close} from './../iconos/close.svg'
import {ReactComponent as Menu} from './../iconos/menu.svg'
import theme from './../theme'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const menuToogle = () => {
        setToggle(!toggle)
    }

    return ( 
        <Header>
                <MenuIcon onClick={menuToogle} />
            <DivLogo>
                <h2><Link to="/">Josue Anguiano</Link></h2>
            </DivLogo>
            <Nav>
                <ul className={toggle ? 'toggle' : ''}>
                    <li><NavLink  to="/home" onClick={() => setToggle(false)}>Home</NavLink></li>
                    <li><NavLink  to="/portfolio" onClick={() => setToggle(false)}>Portfolio</NavLink></li>
                    <li><NavLink  to="/about" onClick={() => setToggle(false)}>About</NavLink></li>
                    <li><CloseIcon onClick={menuToogle}/></li>
                </ul>
            </Nav>
        </Header>
     );
}

const Header = styled.header`
    min-height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    background-color: transparent;
    box-shadow: 3px 3px 3px 0px #888;
`;

const DivLogo = styled.div`
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
    }
`;

const Nav = styled.nav`
    display: flex;

     ul > li {
         list-style: none;
         display: inline-block;
     }

     ul > li > a {
         text-decoration: none;
         text-transform: uppercase;
         color: #555;
         padding: 0px 15px;
     }

     ul > li > a:hover {
         color: ${theme.azul}
     }

     .toggle{
         top: 0;
     }

     @media (max-width: 650px){
        ul{
            position: fixed;
            top: -100%;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            z-index: 99;
            opacity: 0.97;
            transition: 0.5s linear;
        }
    }
`;

const MenuIcon = styled(Menu)`
    cursor: pointer;
    display: none;

    @media (max-width: 650px){
        display: block;
    }
`;

const CloseIcon = styled(Close)`
    cursor: pointer;
    display: none;

    @media (max-width: 650px){
        display: block;
        position: absolute;
        top:10px;
        right: 20px;
    }
`;
 
export default Navbar;