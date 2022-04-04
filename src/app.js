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
        <Route path="users/*" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
        <Route path="uploads" element={<Upload />} />
      </Routes>
      {/* <div
        id="g_id_onload"
        data-client_id="237649064676-i7ueb5crtq345ne7gs45nki18dddqbjo.apps.googleusercontent.com"
        data-context="signin"
        data-callback={() => handleCredentialResponse()}
      ></div> */}
      {!isAuthPath && <Footer />}
    </>
  );
}

export default App;
