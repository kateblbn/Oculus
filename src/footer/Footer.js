import React from 'react'
import { styled } from 'styled-components'
import youtube from '../img/icons/youtube.png';
import facebook from '../img/icons/fb.png';
import insta from '../img/icons/insta.png';

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
          <li><NavA href="https://www.meta.com/no/quest/accessories/" className="nav__item">SHOP</NavA></li>
          <li><NavA href="https://www.oculus.com/experiences/quest/" className="nav__item">GAMES</NavA></li>
          <li><NavA href="https://www.meta.com/no/quest/products/quest-2/" className="nav__item">METAVERSE</NavA></li>
          <li><Contact href="https://developer.oculus.com/support/" className="nav__item">CONTACT US</Contact></li>
        </NavigUl>
        <Flex>
            <a href='https://www.youtube.com/META'>
            <NavImgBuy src={youtube} alt="youtube" className="youtube"/>
            </a>
            <a href='https://www.facebook.com/Meta/?locale=en_EN'>
            <NavImgBuy src={facebook} alt="facebook" className="facebook"/>
            </a>
            <a href='https://www.instagram.com/meta/?hl=en'>
            <NavImgBuy src={insta} alt="insta" className="insta"/>
            </a>
        </Flex>
    </Navig>
  )
}

export default Footer