import { collection } from 'firebase/firestore';

import { db } from './firebase';

export const postsCollectionRef = collection(db, 'posts');
