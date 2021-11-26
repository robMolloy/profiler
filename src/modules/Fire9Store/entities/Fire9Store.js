import { initializeApp } from 'firebase/app';
// initializeApp(firebaseCredentials);

import { getFirestore, doc, getDoc, getDocs, collection, setDoc, updateDoc } from 'firebase/firestore';

export class Fire9Store {
  constructor(config, settings) {
    settings = settings || { timestampsInSnapshots: true, enablePersistence: true };

    // Initialize Firebase
    initializeApp(config);

    this.db = getFirestore();
    this.db.settings(settings);
    Object.assign(this, { doc, getDoc, getDocs, collection, setDoc, updateDoc });
  }

  static isManyDocs(data) {
    return Array.isArray(data);
  }

  getRef({ collectionName, data, id }) {
    const refId = id || data.id;
    return this.doc(this.db, collectionName, refId);
  }

  getCollection({ collectionName }) {
    return this.collection(this.db, collectionName);
  }
}
