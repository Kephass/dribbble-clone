import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Footer, Header } from '@components';

import { SignIn, SignUp } from './screens/authentication';
import { DesignerSearch, Freelance, Jobs } from './screens/findwork';
import GoPro from './screens/GoPro';
import Inspiration from './screens/Inspiration';
import Landing from './screens/Landing';
import LearnDesign from './screens/LearnDesign';
import Marketplace from './screens/Marketplace';
import UserProfile from './screens/UserProfile';

function App() {
  const currentLocation = useLocation().pathname;
  const AuthPaths = ['/signup', '/signin', '/forgotpassword', '/resetpassword'];
  const [isAuthPath, setIsAuthPath] = useState(true);
  useEffect(() => {
    setIsAuthPath(AuthPaths.includes(currentLocation));
  }, [currentLocation]);
  return (
    <>
      {!isAuthPath && <Header />}
      <Routes>
        {/* Authentication paths */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* content paths */}
        <Route path="/" element={<Landing />} />
        <Route path="shots" element={<Inspiration />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="freelance-jobs" element={<Freelance />} />
        <Route path="designers" element={<DesignerSearch />} />
        <Route path="learn" element={<LearnDesign />} />
        <Route path="pro" element={<GoPro />} />
        <Route path="marketplace" element={<Marketplace />} />
        {/* <Route path="hiring" element={<HireDesigners />} /> */}
        <Route path="/users/:userId" element={<UserProfile />} />
        {/*
            <Route path='uploads' element={Upload} />
            */}
      </Routes>
      {!isAuthPath && <Footer />}
    </>
  );
}

export default App;
