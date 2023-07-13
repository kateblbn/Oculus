import easy from "../img/easy.jpg";
import styled from 'styled-components'


const ProductDiv = styled.div`
padding: 100px 0;
margin-top: 1000px;
`
const Title = styled.div`
width: 329px;
font-size: 36px;
font-weight: 400;
text-transform: uppercase;
background: linear-gradient(rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
// const Change = styled(Block)`
// padding: 30px 0;
// `
const Subtitle = styled.div`
color: var(--grey, #5C5C5E);
font-size: 16px;
font-weight: 400;
margin-right: 132px;

`
const FlexTitleSub = styled.div`
display: flex;
margin-bottom: 20px;
`
const ProductItems = styled.div`
display: grid;
grid-template-columns: 280px 580px 280px;
grid-template-rows: 150px 150px;
gap: 20px;
`
const ItemUl = styled.ul`
    grid-column: 1;
    grid-row: 1/3;
    margin-left: 25px;
    li {
        list-style-type: decimal-leading-zero;
        margin-bottom: 15px;
        font-size: 16px;
        color: var(--grey, #5C5C5E);
        &:nth-child(1) {
            color: black;
        }
    }
`
const ProductImg = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
`
const ProductGrafics = styled.div`
    display: grid;
    grid-column: 3;
    grid-row: 1/3;
    `
const GraficDescr = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
`
const GraphicName = styled.div`
    color: var(--grey, #5C5C5E);
    font-family: Helvetica;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
`
const GraphicTxt = styled.div`
    width: 273px;
    color: var(--grey, #5C5C5E);
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
`
const GraphicVideo = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
`

function Product() {
    return (
        <ProductDiv>
            <FlexTitleSub>
                <Subtitle>PRODUCT FEATURES</Subtitle>  
                <Title>Easy to set up and safe to use</Title>      
            </FlexTitleSub>   
            <ProductItems>
                <ItemUl>
                    <li className="product__item-li">Graphics</li>
                    <li className="product__item-li">Controls</li>
                    <li className="product__item-li">Processor</li>
                    <li className="product__item-li">Set up your play area</li>
                    <li className="product__item-li">Gardian activity</li>
                    <li className="product__item-li">Headset casting</li>
                </ItemUl>  
            <ProductImg>
                <img src={easy} alt="easy"/>
            </ProductImg>  
            <ProductGrafics>
                <GraficDescr>
                    <GraphicName>Grafics</GraphicName>
                    <GraphicTxt>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible</GraphicTxt>
                </GraficDescr>
                <GraphicVideo>
                    <iframe width="300" height="150" src="https://www.youtube.com/embed/tyVJ20AzCvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </GraphicVideo>
            </ProductGrafics>
            </ProductItems>         
        </ProductDiv>
    )
}
export default Product;

