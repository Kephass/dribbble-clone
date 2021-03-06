import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Footer, Header } from '@components';
import {
  Error,
  GoPro,
  Inspiration,
  Landing,
  LearnDesign,
  Marketplace,
  Premium,
  Search,
  Upload,
  UserProfile,
} from '@screens';

import { userLogInModal, userStateAtom } from './data/atoms';
import { ForgotPassword, SignIn, SignUp } from './screens/authentication';
import { DesignerSearch, Freelance, Jobs } from './screens/findwork';
import HireDesigners from './screens/HireDesigners';
import { handleCredentialResponse } from './firebase';

function App() {
  const [user, setUserAtom] = useRecoilState(userStateAtom);
  const setLogInModal = useSetRecoilState(userLogInModal);
  const auth = getAuth();

  useEffect(() => {
    return onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUserAtom(userRes.reloadUserInfo);
        setLogInModal(false);
      } else {
        setUserAtom(null);
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        google.accounts.id.prompt();
      }
    });
  }, [user]);

  const currentLocation = useLocation().pathname;
  const AuthPaths = ['/signup', '/signin', '/forgotpassword', '/resetpassword'];
  const [isAuthPath, setIsAuthPath] = useState(true);
  useEffect(() => {
    setIsAuthPath(AuthPaths.includes(currentLocation));
  }, [currentLocation]);

  return (
    <>
      {!isAuthPath && <Header user={user} />}

      <Routes>
        {/* Authentication paths */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* content paths */}
        <Route path="/" element={<Landing />} />
        <Route path="shots" element={<Inspiration />} />
        <Route path="shots/:filter" element={<Inspiration />} />
        <Route path="shots/:filter/:tag" element={<Inspiration />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="freelance-jobs" element={<Freelance />} />
        <Route path="designers" element={<DesignerSearch />} />
        <Route path="learn" element={<LearnDesign />} />
        <Route path="pro" element={<GoPro />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="hiring" element={<HireDesigners />} />
        <Route path="users/:username" element={<UserProfile />} />
        <Route path="users/:username/:tab" element={<UserProfile />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="search/*" element={<Search />} />
        <Route path="*" element={<Error />} />
        <Route path="uploads" element={<Upload />} />
        <Route path="premium/success" element={<Premium />} />
      </Routes>

      {!isAuthPath && <Footer />}
    </>
  );
}

export default App;
