import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import { Header } from '@components';

import SignUp from './components/auth/SignUp';
import { DesignerSearch, Freelance, Jobs } from './Pages/FindWork';
import GoPro from './Pages/GoPro';
import Inspiration from './Pages/Inspiration';
import Landing from './Pages/Landing';
import LearnDesign from './Pages/LearnDesign';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Landing />} />
          <Route path="shots" element={<Inspiration />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="freelance-jobs" element={<Freelance />} />
          <Route path="designers" element={<DesignerSearch />} />
          <Route path="learn" element={<LearnDesign />} />
          <Route path="learnDesign" element={<LearnDesign />} />
          <Route path="pro" element={<GoPro />} />
          {/*
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
