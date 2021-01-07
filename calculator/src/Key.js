import React from "react"

function Key(props) {
    return (
        <button onClick={props.handleKeyPress} >{props.keySymbol}</button>
    )
}

export default Key