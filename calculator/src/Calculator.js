import React from "react"
import Display from "./Display"
import Keypad from "./Keypad"

class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayValue: 0,
            expression: ""
        }
    }

    componentDidMount() {
        this.selectDisplayInput()
    }

    selectDisplayInput = () => {
        document.getElementsByTagName("input")[0].focus()
        document.getElementsByTagName("input")[0].select()
    }

    handleDisplayChange = (event) => {
        event.preventDefault()

        this.setState(prevState => {
            return {
                ...prevState,
                displayValue: event.target.value
            }
        })
    }

    handleKeyPress = (event) => {
        event.preventDefault()
        
        const keySymbol = event.target.textContent

        if (keySymbol === "=") {
            this.setState(prevState => {
                const result = Function(`return ${prevState.expression} ${prevState.displayValue}`)()

                return {
                    ...prevState,
                    expression: "",
                    displayValue: result
                }
            })
        } else if (keySymbol === "Clear") {
            this.setState({
                displayValue: 0,
                expression: ""
            })
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    expression: `${prevState.expression} ${this.state.displayValue} ${keySymbol}`
                }
            })
        }

        this.selectDisplayInput()
    }

    render() {
        return (
            <div>
                <Display
                    data={this.state}
                    handleChange={this.handleDisplayChange}
                />
                
                <Keypad handleKeyPress={this.handleKeyPress} />
            </div>
        )
    }
}

export default Calculator

// displayValue is updated whenever the display input changes or a button is pressed.
// Whenever you press a button, value becomes value + displayValue.