<template>
  <section>
    <h2>{{ breedName }}</h2>
    <ul>
      <pet-item
        v-for="animal in animals"
        :key="animal.id"
        :name="animal.fullName"
        :specie="animal.specie"
      ></pet-item>
    </ul>
  </section>
</template>

<script>
import PetItem from "../pets/PetItem.vue";

export default {
  props: ["breedId"],
  components: {
    PetItem,
  },
  computed: {
    breeds() {
      return this.$store.getters["breed/breeds"];
    },
    pets() {
      return this.$store.getters["pet/pets"];
    },
  },
  data() {
    return {
      breedName: "",
      animals: [],
    };
  },
  methods: {
    loadBreedAnimals(breedId) {
      const selectedBreed = this.breeds.find((breed) => breed.id === breedId);
      const animals = selectedBreed.animals;
      const selectedAnimals = [];
      for (const animal of animals) {
        const selectedPet = this.pets.find((pet) => pet.id === animal);
        selectedAnimals.push(selectedPet);
      }
      this.animals = selectedAnimals;
      this.breedName = selectedBreed.name;
    },
  },
  created() {
    this.loadBreedAnimals(this.breedId);
  },
  watch: {
    breedId(newId) {
      this.loadBreedAnimals(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  padding: 1rem;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
