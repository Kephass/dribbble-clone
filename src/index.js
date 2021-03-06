import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ChakraProvider } from '@chakra-ui/react';

import App from './app';
import theme from './theme';

import './index.scss';

ReactDOM.render(
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ChakraProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
