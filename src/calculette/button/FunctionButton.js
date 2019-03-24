import React from 'react';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';

const FunctionButton = (props) => {

    const functionToHandle = (num1, num2, operation) => {
        switch (operation) {
            case "+":
                return [num2 + num1, props.text];
                break;
            case "-":
                return [num2 - num1, props.text];
                break;
            case ":":
                return [num2/num1, props.text];
                break;
            case "x":
                return [num2 * num1, props.text];
                break;
            case "=":
                return [num1, props.text];
                break;
        
            default:
                return [num1, props.text];
                break;
        }
    }

    const handleClick = () => {
        props.actionOnClick(functionToHandle);
    }

    const theme = {
        fontsize: props.fontsize,
        size: 50,
        backgroundcolor: props.backgroundcolor ? props.backgroundcolor :  '#ff0000',
        backgroundcolor_active: props.backgroundcolor_active ? props.backgroundcolor_active : '#ff3333',
        fontcolor: 'white'
    }

    return (
        <GenericButton actionOnClick={handleClick} text={props.text} theme={theme}/>
    );
}

FunctionButton.propTypes = {
    text : PropTypes.string,
    fontsize : PropTypes.number,
    actionOnClick: PropTypes.func,
    backgroundcolor: PropTypes.string,
    backgroundcolor_active: PropTypes.string
}

export default FunctionButton;