import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShowerLayout = styled.div`
    background-color: #080808;
    height: 65px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 5px;
    margin-bottom: 10px;
    flex-direction: column
`

const Shower = (props) => {
    return(
        <ShowerLayout>
            <div style={{ fontSize: '30px', fontWeight: '700'}}>{props.content}</div>
            <div style={{ fontSize: '15px', fontWeight: '400'}}>{props.subcontent}</div>
        </ShowerLayout>
    );
}

Shower.propTypes = {
    content: PropTypes.number,
    subcontent: PropTypes.string
}

export default Shower;