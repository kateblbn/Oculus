import { styled } from "styled-components";
import background from '../img/Metaverse.jpg';
const MetaContainer = styled.div`
margin-top: 100px;
`
const MetaText = styled.div`
width: 109px;
display: flex;
text-align: center;
transform: translate(500%, 175%);
color: var(--white, #F6F4F5);
text-shadow: 0 4px 4px #BC10D8;
font-family: Helvetica;
font-size: 16px;
font-style: normal;
font-weight: 400;
`
const MetaBtn = styled.button`
width: 50px;
height: 50px;
border-radius: 50px;
background: var(--gradient, linear-gradient(180deg, #BC10D8 0%, rgba(80, 0, 250, 0.93) 100%));
color:  white;
font-family: Helvetica;
font-size: 16px;
font-weight: 700;
position: absolute;
cursor: pointer;
right: 48.7%;
transform: translateY(375px);
`


function Metaverse() {
    return (
        <MetaContainer>
            <div style={ {backgroundImage:`url(${background})` ,
                         width: `100%`,
                         height: `500px` 
                         
            }}>
                <MetaText>METAVERSE LOADING…</MetaText>
                <MetaBtn>GO</MetaBtn>
            </div>

        </MetaContainer>
    )
}

export default Metaverse;