import './btn.css';
import styled from 'styled-components'
const ButtonBuy = styled.button`
background-color: red;
padding: 5px 15px;
color: white;
`;

function Button({btn}) {
    return (
        <>
                {/* // <button>{btn}</button> */}
        <ButtonBuy>{btn}</ButtonBuy>
</>
    )
}
export default Button;