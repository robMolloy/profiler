import { Fire9Store } from '../modules/Fire9Store/entities';
import firebaseCredentials from '../config/credentials/firebaseCredentials';

export const f9Store = new Fire9Store(firebaseCredentials);
