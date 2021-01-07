import React from "react"

function Display(props) {
    console.log(props)
    
    return (
        <div>
            <input
                value={props.data.displayValue}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default Display