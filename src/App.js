import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@components';
import Landing from './Pages/Landing';
import Inspiration from './Pages/Inspiration';
import FindWork from './Pages/FindWork';
import LearnDesign from './Pages/LearnDesign';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="shots" element={<Inspiration />} />
          <Route path="jobs" element={<FindWork />} />
          <Route path="learn" element={<LearnDesign />} />
          <Route path="learnDesign" element={<LearnDesign />} />
          {/* 
          <Route path="pro" element={<GoPro />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="hiring" element={<HireDesigners />} />
		  */}
          <Route path="/users/:userId" element={<UserProfile />} />
          {/* 
		  <Route path='uploads' element={Upload} /> 
		  */}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
