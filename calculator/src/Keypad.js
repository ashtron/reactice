import React from "react"
import Key from "./Key"

function Keypad(props) {
    return (
        <div>
            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="+"
            />

            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="-"
            />

            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="*"
            />

            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="/"
            />

            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="="
            />

            <Key
                handleKeyPress={props.handleKeyPress}
                keySymbol="Clear"
            />

        </div>
    )
}

export default Keypad