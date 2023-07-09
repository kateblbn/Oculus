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
`;

const NavImgLogo = styled.img`
display: flex;
margin: 0 476px 0 214px;
justify-content: center;
`
const NavImgBuy = styled.img`
display: flex;
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
position: relative;
z-index: 2;
width: 30px;
height: 30px;
top: 10px;
left: 10px;
transition: 0.5s all;
`
const Span = styled.span`
margin-bottom: 5px;
display: block;
width: 30px;
height: 2px;
background-color: black;
transition: all 0.5s;
cursor: pointer;
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
            <div>
            <Span onClick={() => close()}></Span>
            <Span onClick={() => close()}></Span>
            <Span onClick={() => close()}></Span>
            </div>
          </Hamburger>
          <Menu className={activeHumb}>
            <HambUlFlex>
              <Li><NavA href="/" className="nav__item">SHOP</NavA></Li>
              <Li><NavA href="/" className="nav__item">GAMES</NavA></Li>
              <li><NavA href="/" className="nav__item">METAVERSE</NavA></li>
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