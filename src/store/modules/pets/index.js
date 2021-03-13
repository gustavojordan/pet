import petMutations from './mutations.js';
import petActions from './actions.js';
import petGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      pets: [
        { id: '1', fullName: 'Charlie', specie: 'Cat' },
        { id: '2', fullName: 'Max', specie: 'Cat' },
        { id: '3', fullName: 'Ollie', specie: 'Cat' },
        { id: '4', fullName: 'Bella', specie: 'Dog' },
        { id: '5', fullName: 'Lucy', specie: 'Dog' },
      ],
    };
  },
  mutations: petMutations,
  actions: petActions,
  getters: petGetters
};
