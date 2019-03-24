import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Calculette from './calculette/Calculette';
import styled from 'styled-components';

const TitleCalc = styled.p`
  font-color: #282828;
  font-size : 80px;
  font-weight: 800
  margin: 30px;

`

const App = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
          <TitleCalc>Belhoulatrice</TitleCalc>
          <Calculette />
    </div>
  );
}

export default App;