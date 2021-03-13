import breedMutations from './mutations.js';
import breedActions from './actions.js';
import breedGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      breeds: [
        { id: '1', name: 'Persian Cat', animals: ['1', '2'] },
        { id: '2', name: 'Bengal Cat', animals: ['3'] },
        { id: '3', name: 'Poodle Dog', animals: ['4', '5'] },
      ],
    };
  },
  mutations: breedMutations,
  actions: breedActions,
  getters: breedGetters
};
