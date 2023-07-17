import React from 'react'
import { styled } from 'styled-components'
import youtube from '../img/icons/youtube.png';
import facebook from '../img/icons/fb.png';
import insta from '../img/icons/insta.png';
import logo from "../img/logo.png";

const Navig = styled.div`
position: relative;
  display: flex;
  margin: 19px 0;
align-items: center;
`;
const NavigUl = styled(Navig)`
  display: flex;
  .nav__item {
    margin-right: 20px;
  }

`;

const NavImgLogo = styled.img`
position: absolute;
right: 60%;
left: 40%;

`
const NavImgBuy = styled.img`
width: 30px;
height: 30px;
`
const NavA = styled.a`
color: black;
&:hover {
  color: rgb(135, 75, 75);
  text-decoration: double;
  transition: 0.5s all;
}
`
const Contact = styled.div`

    &:nth-child(1) {
        margin-right: 0; 
    }
`
const Flex = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    gap: 20px;
`

function Footer() {
  return (
    <Navig>
        <NavigUl>
          <li><NavA href="/" className="nav__item">SHOP</NavA></li>
          <li><NavA href="/" className="nav__item">GAMES</NavA></li>
          <li><NavA href="/" className="nav__item">METAVERSE</NavA></li>
          <li><Contact href="/" className="nav__item">CONTACT US</Contact></li>
        </NavigUl>
        <NavImgLogo src={logo} alt="logo" className="nav__logo"/>
        <Flex>
            <a href='/'>
            <NavImgBuy src={youtube} alt="youtube" className="youtube"/>
            </a>
            <a href='/'>
            <NavImgBuy src={facebook} alt="facebook" className="facebook"/>
            </a>
            <a href='/'>
            <NavImgBuy src={insta} alt="insta" className="insta"/>
            </a>
        </Flex>


    </Navig>
  )
}

export default Footer