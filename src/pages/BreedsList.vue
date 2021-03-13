<template>
  <router-view></router-view>
  <ul>
    <breeds-item
      v-for="breed in breeds"
      :key="breed.id"
      :id="breed.id"
      :name="breed.name"
      :animal-count="breed.animals.length"
    ></breeds-item>
  </ul>
</template>

<script>
import BreedsItem from '../components/breeds/BreedsItem.vue';

export default {
  components: {
    BreedsItem
  },
  computed: {
    breeds() {
      return this.$store.getters['breed/breeds'];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
