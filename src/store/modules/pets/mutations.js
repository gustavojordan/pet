export default {
  setPets(state, payload) {
    state.pets = payload;
  },
  add(state, payload) {
    payload.id = String(state.pets.length + 1);
    state.pets.push(payload);
    this.dispatch("breed/addNewPet", payload);
  },
};
