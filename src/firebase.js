import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDg1m4o6_qATEV44PKFEJZAaa9jbfUbA6U',
  authDomain: 'dribble-clone-33a3d.firebaseapp.com',
  projectId: 'dribble-clone-33a3d',
  storageBucket: 'dribble-clone-33a3d.appspot.com',
  messagingSenderId: '237649064676',
  appId: '1:237649064676:web:503677ae5416b5fe33b2f1',
  measurementId: 'G-NPGC7GE7LK'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();
