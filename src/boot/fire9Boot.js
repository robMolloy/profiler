import { Fire9Store, vuexSync } from 'fire9store';
import firebaseCredentials from '../config/credentials/firebaseCredentials';

export const f9Store = new Fire9Store(firebaseCredentials);

export default ({ store }) => {
  vuexSync({ f9Store, store, moduleName: 'coll1' });
};
