import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Footer, Header } from '@components';

import { SignIn, SignUp } from './Pages/Auth';
import { DesignerSearch, Freelance, Jobs } from './Pages/FindWork';
import GoPro from './Pages/GoPro';
import Inspiration from './Pages/Inspiration';
import Landing from './Pages/Landing';
import LearnDesign from './Pages/LearnDesign';
import UserProfile from './Pages/UserProfile';

function Dribbble() {
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
        {/*
              <Route path="marketplace" element={<MarketPlace />} />
              <Route path="hiring" element={<HireDesigners />} />
                  */}
        <Route path="/users/:userId" element={<UserProfile />} />
        {/*
              <Route path='uploads' element={Upload} />
              */}
      </Routes>
      {!isAuthPath && <Footer />}
    </>
  );
}

export default Dribbble;
