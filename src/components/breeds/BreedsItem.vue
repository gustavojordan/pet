<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="breed-animals">{{ animalCount }} Animals</div>
    <router-link :to="breedAnimalsLink">View Animals</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'animalCount'],
  computed: {
    breedAnimalsLink() {
      return {
        name: 'breed-animals',
        params: { breedId: this.id },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .breed-animals {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #62b624;
}

a:hover {
  background-color: #3a6b15;
}
</style>