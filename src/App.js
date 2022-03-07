import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@components';
import Landing from './Pages/Landing';
import Inspiration from './Pages/Inspiration';
import FindWork from './Pages/FindWork';
import LearnDesign from './Pages/LearnDesign';

function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="findWork" element={<FindWork />} />
          <Route path="learnDesign" element={<LearnDesign />} />
          {/* 
          <Route path="goPro" element={<GoPro />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="hireDesigners" element={<HireDesigners />} />
		  <Route path='upload' element={Upload} /> 
		  */}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
