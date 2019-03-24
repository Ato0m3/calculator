import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonLayout = styled.div`
    padding: 5px;
    font-size: ${props => props.theme.fontsize + 'px'};
    height: ${props => props.theme.size + 'px'};
    width: ${props => props.theme.size + 'px'};
    background-color: ${props => props.theme.backgroundcolor};
    color: ${props => props.theme.fontcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px
    margin: 3px;
    cursor: pointer;
    &:hover {
        border: solid;
        border-width: 0.2px
    }

    &:active {
        background:${props => props.theme.backgroundcolor_active}
    }
`

const GenericButton = (props) => {

    return (
        <ButtonLayout onClick={props.actionOnClick} theme={props.theme}>
            { props.text != null ? props.text : props.number }
        </ButtonLayout>
    )
}

GenericButton.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string,
    theme: PropTypes.object,
    actionOnClick: PropTypes.func
}

export default GenericButton;