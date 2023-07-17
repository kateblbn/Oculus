import headset from "../img/included/headset.jpg";
import controlers from "../img/included/controlers.jpg";
import adapter from "../img/included/adapter.jpg";
import spacer from "../img/included/spacer.jpg";
import { styled } from "styled-components";

const BoxContainer = styled.div`
    margin-top: 109px;
`
const Title = styled.div`
    width: 300px;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    background: linear-gradient(rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    grid-column: 4;
    grid-row: 1;
`
const Subtitle = styled.div`
    color: var(--grey, #5C5C5E);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 50px;
`
const BoxItems = styled.div`
    display: grid;
    grid-template-columns: 280px 280px 290px 290px;
    grid-template-rows: 250px 250px;
    gap: 20px;
    .box__items-descr {
        margin-top: 10px;
    }
`
const HeadSet = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;
`
const Controler = styled.div`
    grid-row: 1;
    grid-column: 3;
`
const Adapter = styled.div`
    grid-row: 2;
    grid-column: 3;
`
const Spacer = styled.div`
grid-column: 4;
grid-row: 2;
`


function Box() {
    return ( 
        <BoxContainer>
            <Subtitle>IN THE BOX</Subtitle>
            <BoxItems>
                <Title>What's included</Title>
                <HeadSet>
                    <img src={headset} alt="headset" className="box__items-img"/>
                    <div className="box__items-descr">VR Headset</div>
                </HeadSet>
                <Controler>
                    <img src={controlers} alt="controlers" className="box__items-img"/>
                    <div className="box__items-descr">Two Touch Controllers & AA Batteries</div>
                </Controler>
                <Adapter>
                    <img src={adapter} alt="adapter" className="box__items-img"/>
                    <div className="box__items-descr">Charging Cable & Power Adapter</div>
                </Adapter>
                <Spacer>
                    <img src={spacer} alt="spacer" className="box__items-img"/>
                    <div className="box__items-descr">Glasses Spacer</div>
                </Spacer>

            </BoxItems>

        </BoxContainer>
    )
}

export default Box;