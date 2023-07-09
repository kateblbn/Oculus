import headset from "../img/included/headset.jpg";
import controlers from "../img/included/controlers.jpg";
import adapter from "../img/included/adapter.jpg";
import spacer from "../img/included/spacer.jpg";


function Box() {
    return ( 
        <div className="box">
            <h2 className="title">What's included</h2>
            <h3 className="subtitle">IN THE BOX</h3>
            <div className="box__items">
                <div className="box__items-item">
                    <img src={headset} alt="headset" className="box__items-img"/>
                    <div className="box__items-descr">VR Headset</div>
                </div>
                <div className="box__items-item">
                    <img src={controlers} alt="controlers" className="box__items-img"/>
                    <div className="box__items-descr">Two Touch Controllers & AA Batteries</div>
                </div>
                <div className="box__items-item">
                    <img src={adapter} alt="adapter" className="box__items-img"/>
                    <div className="box__items-descr">Charging Cable & Power Adapter</div>
                </div>
                <div className="box__items-item">
                    <img src={spacer} alt="spacer" className="box__items-img"/>
                    <div className="box__items-descr">Glasses Spacer</div>
                </div>

            </div>

        </div>
    )
}

export default Box;