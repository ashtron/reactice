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

        this.setState({
            displayValue: event.target.value
        })
    }

    handleKeyPress = (event) => {
        event.preventDefault()
        
        const keySymbol = event.target.textContent

        if (keySymbol === "=") {
            this.setState(prevState => {
                // Evaluate the expression by creating and immediately calling a function to avoid
                // using eval().
                const result = Function(`return ${prevState.expression} ${prevState.displayValue}`)()

                return {
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