import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const postsRef = collection(db, 'posts');
const limitNumber = 8;
let lastPost;

//?  ==== SHOTS ==== //
// Get user and liked SHOTS
async function getUserAndLikedPosts({ localId }) {
  const likePostQuery = query(
    postsRef,
    where('likes', 'array-contains', localId)
  );
  const userPostQuery = query(postsRef, where('uid', '==', localId));
  const getLikedPosts = await handlePostsFromFirestore(likePostQuery, true);
  const getUserPosts = await handlePostsFromFirestore(userPostQuery, true);
  return removeDuplicates([...getLikedPosts, ...getUserPosts]);
}
// Get all SHOTS
async function getAllPosts(filter, tag = null) {
  filter = checkFilterName(filter);
  const querySelector = tag
    ? query(
        postsRef,
        where('tags', 'array-contains', tag),
        orderBy(filter, 'desc'),
        limit(limitNumber)
      )
    : query(postsRef, orderBy(filter, 'desc'), limit(limitNumber));
  return handlePostsFromFirestore(querySelector);
}
// Get new SHOTS
async function getNewPost(filter, tag = null) {
  if (lastPost === undefined || lastPost === null) return;
  filter = checkFilterName(filter);
  let querySelector = query(
    postsRef,
    orderBy(filter, 'desc'),
    startAfter(lastPost),
    limit(limitNumber)
  );
  if (tag) {
    querySelector = query(
      postsRef,
      where('tags', 'array-contains', tag),
      orderBy(filter, 'desc'),
      startAfter(lastPost),
      limit(limitNumber)
    );
  }
  return handlePostsFromFirestore(querySelector);
}

//?  ==== HELPERS ==== //
// Get SEARCH result
export const handleSearchResult = async (res) => {
  const querySelector = query(
    postsRef,
    where('captionIndex', 'array-contains', res.toLowerCase()),
    orderBy('timestamp', 'desc'),
    limit(limitNumber)
  );
  return handlePostsFromFirestore(querySelector);
};
// Get SHOTS from firestore
const handlePostsFromFirestore = async (querySelector, isUserData = null) => {
  const res = await getDocs(querySelector);
  lastPost = !isUserData ? res.docs[res.docs.length - 1] : null;
  const postArray = [];
  res.forEach((doc) => {
    const docId = doc.id;
    return postArray.push({ ...doc.data(), docId });
  });
  return postArray;
};

// Get Users from firestore
const handleUserFromFirestore = async (uid) => {
  const userQuery = query(
    collection(db, 'users'),
    where('uid', '==', uid),
    limit(1)
  );
  const res = await getDocs(userQuery);
  let user;
  res.forEach((doc) => {
    const docId = doc.id;
    user = { ...doc.data(), docId };
  });
  return user;
};

//Update user profile information
const handleUpdateUserProfile = async (docId, userData) => {
  updateDoc(doc(db, 'users', docId), {
    biography: userData.biography,
    skills: userData.skills,
    location: userData.location,
  });
};

// Remove duplicates
const removeDuplicates = (dupArray) => {
  return dupArray.reduce((item, pos) => {
    const x = item.find((y) => y.docId === pos.docId);
    if (!x) return item.concat([pos]);
    return item;
  }, []);
};

const checkFilterName = (filter) => {
  switch (filter) {
    case 'popular':
      filter = 'views';
      break;
    case 'new':
      filter = 'timestamp';
      break;
    default:
      filter = 'timestamp';
      break;
  }
  return filter;
};

export {
  auth,
  db,
  getAllPosts,
  getNewPost,
  getUserAndLikedPosts,
  handleUpdateUserProfile,
  handleUserFromFirestore,
  limitNumber,
};
