import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
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

import { auth, db } from './firestore.collections';

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
    tags: postData?.tags,
    timestamp: serverTimestamp(),
  });

  const imageUrls = [];
  const upload = new Promise((resolve) => {
    postData?.images.forEach(async (image, i) => {
      const imageRef = ref(storage, `posts/${docRef.id}/${docRef.id}${i}`);
      await uploadBytes(imageRef, image).then(async () => {
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
// Update view POST
const viewPost = async (docId, setPosts, views = 0) => {
  const docRef = doc(db, 'posts', docId);
  views += 1;
  await updateDoc(docRef, { views });
  setPosts((oldPosts) => {
    return [...oldPosts].map((post) =>
      post.docId === docId ? { ...post, views } : post
    );
  });
};
// Update Like POST
const likePost = async (user, docId, setPosts, isLiked) => {
  setPost(setPosts, docId, user, isLiked);
  const docRef = doc(db, 'posts', docId);
  await updateDoc(docRef, {
    likes: isLiked ? arrayRemove(user.localId) : arrayUnion(user.localId),
  });
};
const setPost = (setPosts, docId, user, isLiked) => {
  setPosts((oldPosts) => {
    return [...oldPosts].map((post) => {
      const newPost = { ...post };
      if (newPost.docId === docId) {
        if (isLiked) {
          newPost.likes = newPost.likes.filter(
            (filterPost) => filterPost !== user?.localId
          );
        } else {
          const likes = newPost.likes ?? [];
          newPost.likes = [...likes, user?.localId];
        }
      }
      return newPost;
    });
  });
};
export {
  auth,
  createPost,
  db,
  likePost,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  storage,
  viewPost,
};
