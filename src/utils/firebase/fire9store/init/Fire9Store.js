import firebase from 'firebase/app';

import 'firebase/firestore';

import { add, addOne, addBatch } from '../functions/create';

export class Fire9Store {
  constructor(config, settings) {
    settings = settings || { timestampsInSnapshots: true, enablePersistence: true };

    // Initialize Firebase
    firebase.initializeApp(config);

    this.db = firebaseApp.firestore();
    this.db.settings(settings);
    this.settings = settings;
  }

  async add(props) {
    return await add({ db: this.db, ...props });
  }

  async addOne(props) {
    const response = await addOne({ db: this.db, ...props });
    return response;
  }

  async addBatch(props) {
    const response = await addBatch({ db: this.db, ...props });
    return response;
  }
}
