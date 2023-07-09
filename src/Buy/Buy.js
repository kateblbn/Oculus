import Button from "../Buttons/Buttons";
import back from "../img/buy-oculus.png";

function Buy() {
    return (
        <div className="buy">
            <div className="buy__background"></div>
            <img className="buy__img" src={back} alt="back"/>
            <div className="buy__btns">
                <Button btn="BUY NOW"/>
                <Button btn="399,99 USD"/>
            </div>
            <div className="buy__for-age">Meta Quest 2 is for ages 13+</div>
        </div>
    )
}
export default Buy;