import { styled } from "styled-components";
import back from "../img/buy-oculus.png";
const BuyAll = styled.div`
z-index: 1;
`
const BuyBackground = styled.div`
position: absolute;
left: 0;
z-index: 11;
DISPLAY: flex;
justify-content: center;
width: 100%;
height: 387px;
font-family: Inter;
font-size: 400px;
font-weight: 700;
background-image: linear-gradient(90deg, #BC10D8, #5000FA);
opacity: 0.1;
background-color: #2AA5A0;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Absolute = styled.div`
z-index: 25;
position: relative;
display: flex;
flex-direction: column;
 padding-top: 27px;
`
const Img = styled.img`
width: 360px;
margin: 0 auto;
`
const HeaderBtn = styled.button`
background: var(--gradient, linear-gradient(180deg, #BC10D8 0%, rgba(80, 0, 250, 0.93) 100%));
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 60px;
cursor: pointer;
color: white;
`
const HeaderBtnRight = styled.button`
background: rgba(217, 217, 217, 0.00);
color: white;
width: 300px;
height: 60px;
cursor: pointer;
border:  1px solid ;
color: var(--grey, #5C5C5E);
/* button */
font-size: 16px;
font-family: Helvetica;
font-style: normal;
font-weight: 700;
border: 10px solid;
border-image-slice: 1;
border-width: 2px;
border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`
const FlexBtn = styled.div`
display: flex;
justify-content: center;
`
const MetaAge = styled.div`
margin: 0 auto;
margin-top: 10px;
`
function Buy() {
    return (
        <BuyAll>
            <BuyBackground>OCULUS</BuyBackground>
            <Absolute>
            <Img className="buy__img" src={back} alt="back"/>
            <FlexBtn className="buy__btns">
                <HeaderBtn>BUY NOW</HeaderBtn>
                <HeaderBtnRight>399,99 USD</HeaderBtnRight>
            </FlexBtn>
            <MetaAge className="buy__for-age">Meta Quest 2 is for ages 13+</MetaAge>
            </Absolute>
        </BuyAll>
    )
}
export default Buy;