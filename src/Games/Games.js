import { styled } from "styled-components";
import Button from "../Buttons/Buttons";
import noman from "../img/games/noman.jpg";
import one from "../img/games/one.jpg";
import supernatural from "../img/games/supernatural.jpg";
import { useState } from "react";

const GamesAll = styled.div`
margin-bottom: 100px;
`
const Wrapper = styled.div`
display: flex;
`
const Title = styled.div`
width: 300px;
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
font-weight: 400;
margin-bottom: 50px;
`
const Descr = styled.div`
margin: 10px 0 30px 0;
width: 300px;
`
const Btn = styled.button`
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 296px;
height: 60px;
cursor: pointer;
border:  1px solid ;
background-image: linear-gradient(90deg, #BC10D8, #5000FA);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
border: 10px solid;
border-image-slice: 1;
border-width: 2px;
border-image-source: linear-gradient(to left, rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
  `
const GamesCards = styled.div`
display: flex;

`
const CardsCard = styled.div`
position: relative;
border: 10px solid;
border-image-slice: 1;
border-width: 2px;
border-image-source: linear-gradient(to left, rgba(188, 16, 216, 1), rgba(80, 0, 250, 1));
padding: 20px 17px 22px 17px;
width: 262px;
height: 417px;
margin-right: -2px;
`
const CardName = styled.div`
margin: 10px 0;
font-size: 24px;
font-style: normal;
font-weight: 400;
`
const CardDescr = styled.div`
width: 259px;
color: var(--grey, #5C5C5E);
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 400;
`
const CardLink = styled.a`
color: rgba(188, 16, 216, 1);
position: absolute;
font-size: 16px;
bottom: 20px;
cursor: pointer;
`

function Games() {
    const [game, setGame] = useState(0)
    const gamesStore = () => {
       const link = ''
console.log(game);
    }
    return (
        <GamesAll>
            <Subtitle>GAMES</Subtitle>
            <Wrapper>
                <div className="games__info">
                    <Title>It’s all fun and games</Title>
                    <Descr>Discover new adventures, master epic challenges or revisit classic moments in your favourite games and experiences</Descr>
                    <Btn >
                        <a href='https://www.oculus.com/experiences/quest/'>See all games</a>
                        
                        </Btn>
                </div>
                <GamesCards>
                    <CardsCard>
                        <img src={noman} alt="noman" className="games__cards-img"/>
                        <CardName>Blade & Sorcery: Nomad</CardName>
                        <CardDescr>Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR</CardDescr>
                        <CardLink href="https://www.oculus.com/experiences/quest/2031826350263349/?ranking_trace=0_2031826350263349_QUESTSEARCH_7121ce94-4c87-4e61-b09e-8d6e9564d443" className="games__cards-link">see more</CardLink>
                    </CardsCard>
                    <CardsCard>
                        <img src={one} alt="one" className="games__cards-img"/>
                        <CardName>Population: One</CardName>
                        <CardDescr>Climb anything. Fight everywhere. Experience battle royale only possible in VR</CardDescr>
                        <CardLink href="https://www.oculus.com/experiences/quest/2564158073609422/?ranking_trace=0_2564158073609422_QUESTSEARCH_654784b1-d387-429c-aeb1-4d952f81792e" className="games__cards-link">see more</CardLink>
                    </CardsCard>
                    <CardsCard>
                        <img src={supernatural} alt="supernatural" className="games__cards-img"/>
                        <CardName>Supernatural</CardName>
                        <CardDescr>Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.</CardDescr>
                        <CardLink href="https://www.oculus.com/experiences/quest/2562090053828017/?ranking_trace=0_2562090053828017_QUESTSEARCH_810c804d-4fc9-4627-89ec-07dba295c7fb" className="games__cards-link">see more</CardLink>
                    </CardsCard>

                </GamesCards>
            </Wrapper>
        </GamesAll>
    )
}

export default Games;