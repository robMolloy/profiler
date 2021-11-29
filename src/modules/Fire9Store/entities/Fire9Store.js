import { initializeApp } from 'firebase/app';
// initializeApp(firebaseCredentials);

import { getFirestore, writeBatch, doc, collection, query, where, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { creater, reader, updater, deleter } from '../components';

export class Fire9Store {
  constructor(config) {
    // Initialize Firebase
    initializeApp(config);
    this.db = getFirestore();

    const helpers = { getFirestore, writeBatch, doc, collection, query, where };
    const crudHelpers = { getDoc, getDocs, setDoc, updateDoc, deleteDoc };

    Object.assign(this, helpers, crudHelpers, { uuid }, creater, reader, updater, deleter);
  }

  isManyDocs(data) {
    return Array.isArray(data);
  }

  parseDoc(doc1) {
    return { ...doc1.data(), id: doc1.id };
  }

  parseDocs(docs) {
    const rtn = [];
    docs.forEach((doc1) => rtn.push(this.parseDoc(doc1)));
    return rtn;
  }

  getRef({ collectionName, data, id }) {
    const refId = id || data.id;
    return this.doc(this.db, collectionName, refId);
  }

  getCollection({ collectionName }) {
    return this.collection(this.db, collectionName);
  }

  getBatch() {
    return this.writeBatch(this.db);
  }
}
