import { useState } from "react"

const Button = (props) => {
    const [hover, setHover] = useState(false);

    let style = {
        border: hover ? '1px solid darkGrey' : '1px solid black',
        color: hover? 'black' : 'white',
        backgroundColor: 'rgb(50, 50, 50)',
        fontSize: 'large',
        transition: '0.2s ease'
    }

    Object.assign(style, style, props.style);

    return (
        <button id={props.id} style={style} onClick={props.onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{props.value}</button>
    );
}

export default Button;