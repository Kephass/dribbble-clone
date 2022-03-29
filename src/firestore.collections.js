import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';

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

const postsRef = collection(db, 'posts');
let lastPost;
async function getUserAndLikedPosts(user) {
  let userAndLikePostsArray = [];
  await Promise.all([
    await getDocs(postsCollectionRef('likes', user)).then((res) =>
      res.forEach((doc) => {
        const docId = doc.id;
        return userAndLikePostsArray.push({ ...doc.data(), docId });
      })
    ),
    await getDocs(postsCollectionRef('user', user)).then((res) =>
      res.forEach((doc) => {
        const docId = doc.id;
        return userAndLikePostsArray.push({ ...doc.data(), docId });
      })
    ),
  ]);
  userAndLikePostsArray = userAndLikePostsArray.reduce((item, pos) => {
    const x = item.find((item) => item.docId === pos.docId);
    if (!x) return item.concat([pos]);
    return item;
  }, []);
  return userAndLikePostsArray;
}

async function getAllPosts(tag = null) {
  return handleNewPost(postsCollectionRef('tags', null, tag));
}

async function getNewPost(tag = null) {
  if (lastPost === undefined) return;
  let nextQuery = query(
    postsRef,
    orderBy('timestamp', 'desc'),
    startAfter(lastPost),
    limit(6)
  );
  if (tag) {
    nextQuery = query(
      postsRef,
      where('tags', 'array-contains', tag),
      orderBy('timestamp', 'desc'),
      startAfter(lastPost),
      limit(6)
    );
  }
  return handleNewPost(nextQuery);
}
const handleNewPost = async (querySelector) => {
  const res = await getDocs(querySelector);
  lastPost = res.docs[res.docs.length - 1];
  const postArray = [];
  res.forEach((doc) => {
    const docId = doc.id;
    return postArray.push({ ...doc.data(), docId });
  });
  return postArray;
};
const postsCollectionRef = (
  type = null,
  user = null,
  q = null,
  limitNumber = 6
) => {
  switch (type) {
    case 'tags':
      if (q)
        return query(
          postsRef,
          where('tags', 'array-contains', q),
          orderBy('timestamp', 'desc'),
          limit(limitNumber)
        );
      return query(postsRef, orderBy('timestamp', 'desc'), limit(limitNumber));
    case 'likes':
      return query(postsRef, where('likes', 'array-contains', user.localId));
    case 'user':
      return query(postsRef, where('uid', '==', user.localId));
    default:
      return query(postsRef, orderBy('timestamp', 'desc'), limit(limitNumber));
  }
};

export {
  auth,
  db,
  getAllPosts,
  getNewPost,
  getUserAndLikedPosts,
  postsCollectionRef,
};
