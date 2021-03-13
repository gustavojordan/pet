import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import breedModule from './modules/breed/index.js';
import petModule from './modules/pets/index.js';

const store = createStore({
  modules: {
    breed: breedModule,
    pet: petModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;