<template>
  <ul>
    <pet-item
      v-for="pet in pets"
      :key="pet.id"
      :name="pet.fullName"
      :specie="pet.specie"
    ></pet-item>
  </ul>
</template>

<script>
import PetItem from '../components/pets/PetItem.vue';
export default {
  components: {
    PetItem
  },
  computed: {
    pets() {
      return this.$store.getters['pet/pets'];
    }
  },
  data() {
    return { confirmLeave: false };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmLeave) {
      next();
    } else {
      const petWantsToLeave = confirm('Do you want to leave pets list?');
      next(petWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
