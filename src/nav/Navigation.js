import logo from "../img/logo.png";
import buy from "../img/icons/buy.png";
import './nav.css';
import styled from "styled-components";
import { useState } from "react";

const Navig = styled.div`
position: relative;
  display: flex;
  margin: 19px 0;
align-items: center;
`;
const NavigUl = styled(Navig)`
  width: 250px;
  display: flex;
  justify-content: space-between;
    @media(max-width: 800px) {
      display: none;
    }
`;

const NavImgLogo = styled.img`
position: fixed;
right: 60%;
left: 40%;

`
const NavImgBuy = styled.img`
right: 0;
position: absolute;
width: 25px;
height: 25px;
`
const NavA = styled.a`
color: black;
&:hover {
  color: rgb(135, 75, 75);
  text-decoration: double;
  transition: 0.5s all;
}
`

const Hamburger = styled.div`
display: none;
position: relative;
z-index: 20;
width: 30px;
height: 30px;
top: 10px ;
left: 10px;
transition: 0.5s all;
  @media  (max-width: 800px) {
    display: block;
  }
`
const Span = styled.span`
margin-bottom: 5px;
display: block;
width: 30px;
height: 2px;
background-color: black;
transition: all 0.5s;
cursor: pointer;
    &:nth-child(1) {
      transform: ${({open}) => ((open) ?  'rotate(45deg)' : 'rotate(0)')}
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => 
        (open ? "translateX(20px)":"translateX(0)")};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        (open ? "rotate(-45deg)" : "rotate(0)")};
  
  }
`
const HambUlFlex = styled(NavigUl)`
display: flex;
flex-direction: column;
justify-content: center;
`
const Menu = styled.div`
position: fixed;
z-index: 1;
top: 0;
left: 0;
display: flex;
align-items: 
`
const Li = styled.li`
margin-bottom: 15px;
`

function Navigation() {
  const [open, setOpen] = useState(false)
  function changeClass() {
    setOpen(!open)
  }
  const close = () => setOpen(false);
  const activeHumb = (open)? 'active' : 'noActive'; //!!!!!!!!!!!!!!!
    return (
        <Navig>
          <Hamburger onClick={changeClass}>
            <Span onClick={() => close()}></Span>
            <Span onClick={() => close()}></Span>
            <Span onClick={() => close()}></Span>
          </Hamburger>
          <Menu className={activeHumb}>
            <HambUlFlex>
              <Li><NavA href="/" className="nav__item">SHOP</NavA></Li>
              <Li><NavA href="/" className="nav__item">GAMES</NavA></Li>
              <Li><NavA href="/" className="nav__item">METAVERSE</NavA></Li>
            </HambUlFlex>
          </Menu>

        <NavigUl>
          <li><NavA href="/" className="nav__item">SHOP</NavA></li>
          <li><NavA href="/" className="nav__item">GAMES</NavA></li>
          <li><NavA href="/" className="nav__item">METAVERSE</NavA></li>
        </NavigUl>
        <NavImgLogo src={logo} alt="logo" className="nav__logo"/>
        <NavImgBuy src={buy} alt="buy" className="nav__buy"/>
        </Navig>
      )
}
export default Navigation;