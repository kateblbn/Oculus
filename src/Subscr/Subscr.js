import Button from "../Buttons/Buttons";

function Subscr() {
    return (
        <div className="subscr">
            <div className="subscr__updates">Get news and updates</div>
            <div className="subscr__inp-btn">
            <input type="email" placeholder="Email" className="subscr__email"/>
            <Button btn="Go"/>
            </div>
            <div className="subscr__descr">By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.
You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages.
Your subscription is subject to the Terms and Privacy Policy.</div>

        </div>
    )
}

export default Subscr;