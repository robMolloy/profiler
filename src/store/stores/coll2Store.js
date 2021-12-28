import { index } from 'index9';
import { collection as getCollection, query as createQuery, where, onSnapshot }
// import { collection as getCollection, query as createQuery, where, onSnapshot, doc }
  from 'firebase/firestore';
// import { collection as getCollection, query as createQuery, where } from 'firebase/firestore';
import isEqual from 'lodash/isEqual';

const defaultState = { local: [], remote: [], listeners: [] };

const defaultGetters = {
  state: (s) => s,
  data: ({ local }) => local,
  local: ({ local }) => local,
  remote: ({ remote }) => remote,
  isInSync: ({ local, remote }) => isEqual(local, remote),
  collection: (s, { db, collectionName }) => getCollection(db, collectionName),
  whereQueries: (s, { wheres }) => wheres.map((...x) => where(...x)),
  query: (s, { collection, whereQueries }) => createQuery(collection, ...whereQueries),
  indexed: ({ local }) => index(local)
    .on('id'),
  indexedByKey: ({ local }) => (key) => index(local)
    .on(key),
};

const defaultMutations = {
  setData(state, payload) {
    state.local = payload;
    state.remote = payload;
  },
  setLocal(state, payload) {
    state.local = payload;
  },
  setRemote(state, payload) {
    state.remote = payload;
  },
  createLocal(state, payload) {
    state.local.push(payload);
  },
  deleteLocal(state, payload) {
    const id = payload.id || payload;
    const i = state.local.findIndex((doc) => id === doc.id);
    state.local.splice(i, 1);
  },
  addListener(state, payload) {
    state.listeners.push(payload);
  },
  unsync(state) {
    state.listeners.forEach((listener) => listener());
    state.listeners = [];
  },
};

const defaultActions = {
  async sync({ getters, commit }) {
    let isFirst = true;
    const query = createQuery(getCollection(getters.db, 'coll2'));

    onSnapshot(query, (response) => {
      const docs = [];
      response.forEach((doc) => docs.push({ ...doc.data(), id: doc.id }));
      commit('setRemote', docs);

      if (isFirst) {
        commit('setLocal', docs);
        isFirst = false;
      }
    });
  },

  create({ commit }) {
    commit('createLocal');
  },
  delete({ commit }, payload) {
    commit('deleteLocal', payload);
  },
};

export const createVuexFirestoreSyncStore = (props, store = {}) => {
  const { state = {}, getters = {}, mutations = {}, actions = {} } = store;

  const addGetters = {
    db: () => props.db,
    wheres: () => props.wheres,
    moduleName: () => props.moduleName,
    collectionName: () => props.collectionName,
  };

  return {
    namespaced: true,
    state: { ...defaultState, ...state },
    getters: { ...defaultGetters, ...addGetters, ...getters },
    mutations: { ...defaultMutations, ...mutations },
    actions: { ...defaultActions, ...actions },
  };
};
