import './css.css'
import back from "../img/background-1.jpg";
import styled from "styled-components";

const HeaderBackgr = styled.div`
padding: 230px 0 154px 0; 

` 

const HeaderTitle = styled.div`
color: var(--grey, #5C5C5E);
font-size: 96px;
font-family: Helvetica;
font-weight: 400;
margin-bottom: 10px;
`
const HeaderSubtitle = styled.h2`
color: var(--grey, #5C5C5E);
font-size: 36px;
font-family: Helvetica;
font-style: normal;
font-weight: 400;
`
const HeaderDescr = styled.p`
color: var(--grey, #5C5C5E);
font-size: 13px;
font-family: Helvetica;
font-style: normal;
font-weight: 400;
margin-bottom: 50px;
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
border: 1px solid linear-gradient(180deg, #BC10D8 0%, rgba(80, 0, 250, 0.93) 100%);
`
const HeaderBtnsFlex = styled.div`
display: flex;
`
const HeaderBtnDescr = styled.p`
margin-top: 10px;
color: var(--grey, #5C5C5E);
font-size: 13px;
font-family: Helvetica;
font-style: normal;
font-weight: 400;
`
const DivMargin = styled.div`
padding-left: 340px;
`
// const Overlay = styled.div`
// position: fixed;
// width: 100%;
// height: 100%;
// top: 0;
// left: 0;
// background-color:#FFFFFF;
// opacity: .75;
// `

export const Header = () => {
return (
    <div          style={{backgroundImage: ` url(${back}) `,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '1000px',
                    left: '0'
                    
                }}
>

        <HeaderBackgr>
            <DivMargin>
            <HeaderTitle>Meta Quest 2</HeaderTitle>
            <HeaderSubtitle>Get an Elite Strap free</HeaderSubtitle>
            <HeaderDescr>For a limited time only, save $59.99 USD. Offer ends 1/19/23</HeaderDescr>
            <HeaderBtnsFlex>
                <HeaderBtn btn="BUY NOW">BUY NOW</HeaderBtn>
                <HeaderBtnRight btn="399,99 USD">399,99 USD</HeaderBtnRight>
            </HeaderBtnsFlex>
            <HeaderBtnDescr>Meta Quest 2 is for ages 13+</HeaderBtnDescr>

            </DivMargin>

        </HeaderBackgr>
        {/* <Overlay></Overlay> */}

    </div>
)
}
