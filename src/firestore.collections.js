import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDg1m4o6_qATEV44PKFEJZAaa9jbfUbA6U',
  authDomain: 'dribble-clone-33a3d.firebaseapp.com',
  projectId: 'dribble-clone-33a3d',
  storageBucket: 'dribble-clone-33a3d.appspot.com',
  messagingSenderId: '237649064676',
  appId: '1:237649064676:web:503677ae5416b5fe33b2f1',
  measurementId: 'G-NPGC7GE7LK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const postsCollectionRef = (q = null, uid = null) => {
  const postsRef = collection(db, 'posts');
  if (q) return query(postsRef, where('tags', 'array-contains', q));
  if (uid) return query(postsRef, where('uid', '==', uid));
  return postsRef;
};

export { auth, db, postsCollectionRef };
