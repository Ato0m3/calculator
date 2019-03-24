import React from 'react';
import styled from 'styled-components';
import NumberButton from './button/NumberButton';
import FunctionButton from './button/FunctionButton';
import Shower from './Shower';

const Container = styled.div`
    background-color: grey;
    padding: 20px;
    border-radius: 10px;
`

export default class Calculette extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            oldNumber: 0,
            operation: "",
        }
    }
    
    changeShower = (newContent) => {
        if(this.state.operation === "=") {
            this.setState({operation: "=", newOperation: 0, number: 0});
        }
        this.setState({
            number: parseFloat("" + this.state.number + newContent)
        })
    }

    handleFunction = (functionToHandle) => {
        console.log("Number : " + this.state.number)

        const [newNumber, newOperation] = functionToHandle(this.state.number,
            this.state.oldNumber, this.state.operation);

        console.log("Number : " + this.state.number);
        if(newOperation === "C") {
            this.setState({operation: "", newOperation: 0, number: 0});
        } else if(newOperation === "=") {
            this.setState({operation: "", oldNumber: 0, number: newNumber});
        } else {
            this.setState({operation: newOperation, oldNumber: newNumber, number: 0});
        }
    }
    
    createNumberButtons = (start, end) => {
        let numberButtons = []
        for(let i = start; i <= end; i++) {
            numberButtons.push(<NumberButton actionOnClick={this.changeShower} number={i} fontsize={20} />);
        }

        return numberButtons;
    }

    render() {
        return (
            <Container>
                <Shower content={this.state.number}
                    subcontent={this.state.oldNumber + " " +this.state.operation} />
                <div class="container">
                    <div class="row">
                        {this.createNumberButtons(7,9)}
                        <FunctionButton actionOnClick={this.handleFunction} text="x" fontsize={20} />
                    </div>
                    <div class="row">
                        {this.createNumberButtons(4,6)}
                        <FunctionButton actionOnClick={this.handleFunction} text=":" fontsize={20} />
                    </div>
                    <div class="row">
                        {this.createNumberButtons(1,3)}
                        <FunctionButton actionOnClick={this.handleFunction} text="+" fontsize={20} />
                    </div>
                    <div class="row">
                        {this.createNumberButtons(0,0)}
                        <FunctionButton actionOnClick={this.handleFunction} text="=" fontsize={20}
                            backgroundcolor_active="#239D3F" backgroundcolor="#127B2A" />
                        <FunctionButton actionOnClick={this.handleFunction} text="C" fontsize={20} />
                        <FunctionButton actionOnClick={this.handleFunction} text="-" fontsize={20} />
                    </div>
                </div>
            </Container>
        );
    }

}