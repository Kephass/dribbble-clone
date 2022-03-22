import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Footer, Header } from '@components';
import {
  Error,
  GoPro,
  Inspiration,
  Landing,
  LearnDesign,
  Marketplace,
  Upload,
  UserProfile,
} from '@screens';

import { userStateAtom } from './data/atoms';
import { ForgotPassword, SignIn, SignUp } from './screens/authentication';
import { DesignerSearch, Freelance, Jobs } from './screens/findwork';
import HireDesigners from './screens/HireDesigners';
import { auth } from './firestore.collections';

function App() {
  const [user, setUserAtom] = useRecoilState(userStateAtom);

  onAuthStateChanged(auth, (currentUser) => {
    setUserAtom(currentUser);
  });

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
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* content paths */}
        <Route path="/" element={<Landing />} />
        <Route path="shots" element={<Inspiration />} />
        <Route path="shots/:filter/:tag" element={<Inspiration />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="freelance-jobs" element={<Freelance />} />
        <Route path="designers" element={<DesignerSearch />} />
        <Route path="learn" element={<LearnDesign />} />
        <Route path="pro" element={<GoPro />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="hiring" element={<HireDesigners />} />
        <Route path="users/*" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
        <Route path="uploads" element={<Upload />} />
      </Routes>
      {!isAuthPath && <Footer />}
    </>
  );
}

export default App;
