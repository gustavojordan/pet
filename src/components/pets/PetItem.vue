<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="specie" :class="specie">{{ specie }}</div>
  </li>
</template>

<script>
export default {
  props: ['name', 'specie']
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

.specie {
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.Cat {
  background-color: orange;
  color: black;
}

.Dog {
  background-color: green;
  color: white;
}
</style>
