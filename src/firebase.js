import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from '@firebase/storage';

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
const googleProvider = new GoogleAuthProvider();
const storage = getStorage();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        likedShots: [],
        following: [],
        posts: [],
        collection: [],
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

// POSTS
const createPost = async (postData, user, loading) => {
  if (loading) return;
  const docRef = await addDoc(collection(db, 'posts'), {
    uid: user?.uid,
    title: postData?.title,
    caption: postData?.caption,
    profileImg: user?.photoURL,
    displayName: user?.displayName,
    timestamp: serverTimestamp(),
  });

  const imageUrls = [];
  const upload = new Promise((resolve) => {
    postData?.images.forEach(async (image, i) => {
      const imageRef = ref(storage, `posts/${docRef.id}/${docRef.id}${i}`);
      await uploadBytes(imageRef, image).then(async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        imageUrls.push(downloadURL);
        if (i === postData?.images.length - 1) resolve();
      });
    });
  });
  upload.then(async () => {
    await updateDoc(doc(db, 'posts', docRef.id), {
      images: imageUrls,
      timestamp: serverTimestamp(),
    });
    return 'Post created';
  });
};

// Get POSTS
const getPosts = async () => {
  return await getDocs(collection(db, 'posts'))
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    })
    .catch((err) => {
      console.error('Failed to retrieve data', err);
    });
};

export {
  auth,
  createPost,
  db,
  getPosts,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  storage,
};
