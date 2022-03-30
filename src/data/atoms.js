import { atom } from 'recoil';

export const userStateAtom = atom({
  key: 'user',
  default: null,
});
export const allPostsStateAtom = atom({
  key: 'allPosts',
  default: [],
});
export const userPostsStateAtom = atom({
  key: 'userPosts',
  default: [],
});
export const userLikedPostsStateAtom = atom({
  key: 'userLikedPosts',
  default: [],
});
export const userLogInModal = atom({
  key: 'logInModal',
  default: false,
});
