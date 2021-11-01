import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import firebaseCredentials from '../config/credentials/firebaseCredentials';

initializeApp(firebaseCredentials);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
