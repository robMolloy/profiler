import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';

// import { vuexSync } from 'fire9store';
// import { f9Store } from 'src/boot/fire9Boot';
import { db } from 'src/boot/firebase';
import { coll1Store } from './stores/coll1Store';
import { createVuexFirestoreSyncStore } from './stores/coll2Store';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    modules: {
      coll1: coll1Store,
      coll2: createVuexFirestoreSyncStore({ db, collectionName: 'coll2' }),
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  // vuexSync({ f9Store, store: Store, moduleName: 'coll1' });

  return Store;
});
