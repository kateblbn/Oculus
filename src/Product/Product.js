import easy from "../img/easy.jpg";
import styled from 'styled-components'
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
const ProductDiv = styled.div`
margin-top: 1019px;
padding: 100px 0;
`

function Product() {
    return (
        <ProductDiv>
            <FlexTitleSub>
                <Subtitle>PRODUCT FEATURES</Subtitle>  
                <Title>Easy to set up and safe to use</Title>      
            </FlexTitleSub>   
            <div className="product__items">
                <ul className="product__item-ul">
                    <li className="product__item-li">Graphics</li>
                    <li className="product__item-li">Controls</li>
                    <li className="product__item-li">Processor</li>
                    <li className="product__item-li">Set up your play area</li>
                    <li className="product__item-li">Gardian activity</li>
                    <li className="product__item-li">Headset casting</li>
                </ul>  
            <div className="product__image">
                <img src={easy} alt="easy"/>
            </div>  
            <div className="product__graphics">
                <div className="product__graphics-name">Grafics</div>
                <div className="product__graphics-descr">With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible</div>
                <div className="product__graphics-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tyVJ20AzCvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            </div>         
        </ProductDiv>
    )
}
export default Product;

