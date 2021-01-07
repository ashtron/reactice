import React from "react"

function Display(props) {
    return (
        <div>
            <p>{props.data.expression} {props.data.displayValue}</p>
            <input
                value={props.data.displayValue}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default Display