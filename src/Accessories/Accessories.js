import cases from "../img/acessories/cases.jpg";
import cable from "../img/acessories/cable.jpg";
import pack from "../img/acessories/pack.jpg";
import cards from "../img/acessories/cards.jpg";
import { styled } from "styled-components";
const AccessoriesContainer = styled.div`
    margin: 100px 0;
`
const Title = styled.div`
    margin: 30px 0;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    background: linear-gradient(rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const Subtitle = styled.div`
    color: var(--grey, #5C5C5E);
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 400;
    margin-right: 132px;
`
const Cards = styled.div`
    display: flex;
`
const Card = styled.div`
    position: relative;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(90deg, rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
    padding: 20px 17px 22px 17px;
    width: 300px;
    height: 500px;
    margin-right: -2px;
}
`
const Name = styled.div`
    margin: 10px 0;
    height: 56px;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
`
const Descr = styled.div`
    color: var(--grey, #5C5C5E);
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
`
const Price = styled.div`
    margin: 42px 0 20px 0;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
`
const Btn = styled.div`
    width: 260px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #BC10D8, #5000FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(to left, rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
`

function Accessories() {
    return (
        <AccessoriesContainer>
            <Subtitle>accessories</Subtitle>
                <Title>Personalize every experience</Title>
            <Cards>
                <Card>
                    <img src={cases} alt="case" className="card-img"/>
                    <Name> Meta Quest 2 Carrying Case</Name>
                    <Descr>Protect your system–at home or away.</Descr>
                    <Price>$59.99 USD</Price>
                    <Btn>Buy now</Btn>
                </Card>
                <Card>
                    <img src={cable} alt="cable" className="card-img"/>
                    <Name>Link Cable</Name>
                    <Descr>Harness the power of your PC with this premium fiber-optic cable.</Descr>
                    <Price>$79.99 USD</Price>
                    <Btn>Buy now</Btn>
                </Card>
                <Card>
                    <img src={pack} alt="pack" className="card-img"/>
                    <Name>Meta Quest 2 Active Pack</Name>
                    <Descr>A wipeable facial interface, wrist straps, and knuckle straps.</Descr>
                    <Price>$69.99 USD</Price>
                    <Btn>Buy now</Btn>
                </Card>
                <Card>
                    <img src={cards} alt="cards" className="card-img"/>
                    <Name>Meta Quest Gift Cards</Name>
                    <Descr>Redeemable on 350+ games and apps.</Descr>
                    <Price>$15-50 USD</Price>
                    <Btn>Buy now</Btn>
                </Card>
            </Cards>
        </AccessoriesContainer>
    )
}

export default Accessories;