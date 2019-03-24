import React from 'react';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';

const NumberButton = (props) => {

    const handleClick = () => {
        props.actionOnClick(props.number);
    }

    const theme = {
        fontsize: props.fontsize,
        size: 50,
        backgroundcolor: '#282828',
        backgroundcolor_active: '#404040',
        fontcolor: 'white'
    }

    return (
        <GenericButton actionOnClick={handleClick} number={props.number} theme={theme}/>
    );
}

NumberButton.propTypes = {
    number : PropTypes.number,
    fontsize : PropTypes.number,
    actionOnClick: PropTypes.func
}

export default NumberButton;