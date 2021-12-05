import { index } from 'index9';

const state = { data: [{ id: 'id1', greet: 'frodo' }, { id: 'id2', greet: 'baggins' }] };
const getters = {
  data: ({ data }) => data,
  indexed: ({ data }) => index(data)
    .on('id'),
  indexedByKey: ({ data }) => (key) => index(data)
    .on(key),
};
const mutations = {
  setData(stat, payload) {
    stat.data = payload;
  },

};
const actions = {
  setData(context, payload) {
    context.commit('setData', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
