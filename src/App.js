import { BrowserRouter as Router } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import Dribbble from './Dribbble';

function App() {
  return (
    <Box>
      <Router>
        <Dribbble />
      </Router>
    </Box>
  );
}

export default App;
