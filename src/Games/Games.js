import Button from "../Buttons/Buttons";
import noman from "../img/games/noman.jpg";
import one from "../img/games/one.jpg";
import supernatural from "../img/games/supernatural.jpg";


function Games() {
    return (
        <div className="games">
            <div className="subtitle">GAMES</div>
            <div className="games__wrapper">
                <div className="games__info">
                    <div className="title">It’s all fun and games</div>
                    <div className="games__descr">Discover new adventures, master epic challenges or revisit classic moments in your favourite games and experiences</div>
                    <Button btn="See all games"/>
                </div>
                <div className="games__cards">
                <div className="games__cards-card">
                        <img src={noman} alt="noman" className="games__cards-img"/>
                        <div className="games__cards-name">Blade & Sorcery: Nomad</div>
                        <div className="games__cards-descr">Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR</div>
                        <a href="/" className="games__cards-link">see more</a>
                    </div>
                    <div className="games__cards-card">
                        <img src={one} alt="one" className="games__cards-img"/>
                        <div className="games__cards-name">Population: One</div>
                        <div className="games__cards-descr">Climb anything. Fight everywhere. Experience battle royale only possible in VR</div>
                        <a href="/" className="games__cards-link">see more</a>
                    </div>
                    <div className="games__cards-card">
                        <img src={supernatural} alt="supernatural" className="games__cards-img"/>
                        <div className="games__cards-name">Supernatural</div>
                        <div className="games__cards-descr">Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.</div>
                        <a href="/" className="games__cards-link">see more</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
<div className="games__cards-"></div>

export default Games;