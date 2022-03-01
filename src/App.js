import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';

function App() {
	return (
		<Box>
			<Router>
				<Routes>
					<Route path='/' element={<Landing />} />
				</Routes>
			</Router>
		</Box>
	);
}

export default App;
