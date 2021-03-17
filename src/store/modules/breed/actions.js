export default {
  setBreeds(context, payload) {
    context.commit("setBreeds", payload);
  },
  addNewPet(context, payload) {
    const breeds = context.getters.breeds;
    for (const breed in breeds) {
      if (breeds[breed].id == payload.breed) {
        breeds[breed].animals.push(String(payload.id));
      }
    }
    context.commit("setBreeds", breeds);
  },
};
