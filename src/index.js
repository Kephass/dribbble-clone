import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
