import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Calculette from './calculette/Calculette';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const App = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <title>Calculator</title>
          </Helmet>
          <Calculette />
    </div>
  );
}

export default App;