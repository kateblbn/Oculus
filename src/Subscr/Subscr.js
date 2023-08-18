import { styled } from "styled-components";
const Subscription = styled.div`
margin-bottom: 100px;
`
const Title = styled.div`

`
const InputBtn = styled.div`
    display: flex;
    margin-bottom: 10px;
    .subscr__email {
        width: 542px;
        height: 50px;
        border: none;
        padding: 0 50px 0 5px;
        border-bottom: 1px solid black;
        &:focus {
            outline: none;
        }
    }
`
const Btn = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background-color: #cdcdcd;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-49px, -4px);
    `
const Descr = styled.div`
width: 600px;
color: var(--grey, #5C5C5E);
font-family: Helvetica;
font-size: 13px;
font-weight: 400;
`
const Email = styled.a`
display: flex;
align-items: end;
color: var(--grey, #5C5C5E);
font-family: Helvetica;
font-size: 16px;
font-weight: 400;
`
const Flex = styled.div`
display: flex;
justify-content: space-between;
`

function Subscr() {
    return (
        <Subscription>
            <Title>Get news and updates</Title>
            <InputBtn>
                <input type="email" placeholder="Email" className="subscr__email"/>
                <Btn>Go</Btn>
            </InputBtn>
            <Flex>
                <Descr>By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.
    You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages. <br/>
    Your subscription is subject to <a href="/">the Terms and Privacy Policy</a> . </Descr>
                <Email href="mailto:oculusshop@gmail.com">oculusshop@gmail.com</Email>
            </Flex>
        </Subscription>
    )
}

export default Subscr;