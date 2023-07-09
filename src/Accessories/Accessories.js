import cases from "../img/acessories/cases.jpg";
import cable from "../img/acessories/cable.jpg";
import pack from "../img/acessories/pack.jpg";
import cards from "../img/acessories/cards.jpg";
import Button from "../Buttons/Buttons";

function Accessories() {
    return (
        <div className="accessories">
            <div className="accessories__header">
                <h2 className="title">Personalize every experience</h2>
                <h3 className="subtitle">accessories</h3>
            </div>
            <div className="accessories__cards">
                <div className="accessories__cards-card">
                    <img src={cases} alt="case" className="card-img"/>
                    <div className="card-name"> Meta Quest 2 Carrying Case</div>
                    <div className="card-descr">Protect your system–at home or away.</div>
                    <div className="card-price">$59.99 USD</div>
                    <Button btn="Buy now"/>
                </div>
                <div className="accessories__cards-card">
                    <img src={cable} alt="cable" className="card-img"/>
                    <div className="card-name">Link Cable</div>
                    <div className="card-descr">Harness the power of your PC with this premium fiber-optic cable.</div>
                    <div className="card-price">$79.99 USD</div>
                    <Button btn="Buy now"/>
                </div>
                <div className="accessories__cards-card">
                    <img src={pack} alt="pack" className="card-img"/>
                    <div className="card-name">Meta Quest 2 Active Pack</div>
                    <div className="card-descr">A wipeable facial interface, wrist straps, and knuckle straps.</div>
                    <div className="card-price">$69.99 USD</div>
                    <Button btn="Buy now"/>
                </div>
                <div className="accessories__cards-card">
                    <img src={cards} alt="cards" className="card-img"/>
                    <div className="card-name">Meta Quest Gift Cards</div>
                    <div className="card-descr">Redeemable on 350+ games and apps.</div>
                    <div className="card-price">$15-50 USD</div>
                    <Button btn="Buy now"/>
                </div>
            </div>
        </div>
    )
}

export default Accessories;