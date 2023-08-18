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
position: absolute;
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
display: block;
position: relative;
z-index: 20;
width: 30px;
height: 30px;
top: 10px ;
left: 10px;
transition: 0.5s all;
.first {
  display: none;
}
.rotate {
  transform: rotate(45deg);
  position: absolute;
  transition: 0.5s all;

}
.rotateLeft {
  transform: rotate(-45deg);
  transition: 0.5s all;

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
  const [hidden, sethidden] = useState(false)
  const [rotateR, setRotateR] = useState(false) 
  const [rotateL, setRotateL] = useState(false)
  function changeClass() {
    setOpen(!open)
    sethidden(!hidden)
    setRotateR(!rotateR)
    setRotateL(!rotateL)
  }
  const rotateLeft = (rotateL)? 'rotateLeft' : '';
  const rotateRight = (rotateR)? 'rotate' : ''
  const hidenSpan = (hidden)? 'first' : ''
  const activeHumb = (open)? 'active' : 'noActive'; //!!!!!!!!!!!!!!!
    return (
        <Navig>
          <Hamburger onClick={changeClass}>
            <Span className={rotateRight}></Span>
            <Span className={hidenSpan}></Span>
            <Span className={rotateLeft}></Span>
          </Hamburger>
          <Menu className={activeHumb}>
            <HambUlFlex>
              <Li><NavA href="https://www.meta.com/no/quest/accessories/" className="nav__item">SHOP</NavA></Li>
              <Li><NavA href="https://www.oculus.com/experiences/quest/" className="nav__item">GAMES</NavA></Li>
              <Li><NavA href="https://www.meta.com/no/quest/products/quest-2/" className="nav__item">METAVERSE</NavA></Li>
            </HambUlFlex>
          </Menu>

        <NavImgLogo src={logo} alt="logo" className="nav__logo"/>
        <NavImgBuy src={buy} alt="buy" className="nav__buy"/>
        </Navig>
      )
}
export default Navigation;