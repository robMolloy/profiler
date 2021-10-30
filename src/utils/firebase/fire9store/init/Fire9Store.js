// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import * as createFns from '../functions/create';

export default class Fire9Store {
  constructor(config, settings) {
    settings = settings || { timestampsInSnapshots: true, enablePersistence: true };

    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(config);

    this.db = firebaseApp.firestore();
    this.db.settings(settings);
  }
  ...createFns
}
