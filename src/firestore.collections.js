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
const user = auth.currentUser;

const postsCollectionRef = (type = null, q = null) => {
  const postsRef = collection(db, 'posts');
  switch (type) {
    case 'tags':
      if (q) return query(postsRef, where('tags', 'array-contains', q));
      else return postsRef;
    case 'likes':
      return query(postsRef, where('likes', 'array-contains', user.uid));
    case 'user':
      return query(postsRef, where('uid', '==', user.uid));
    default:
      return postsRef;
  }
};

// const likedPostsRef = () => {
//   return collection(db, 'posts'), where('likes', 'array-contains', user.uid);
// };

export { auth, db, postsCollectionRef };