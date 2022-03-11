import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { store } from './app/store';
import Dribbble from './Dribbble';
import theme from './theme';

import './index.scss';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Dribbble />
        </Router>
      </Provider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
