<template>
  <ul>
    <li :class="{ active: modelValue === 'Cat' }">
      <button type="button" @click="activate('Cat')">Cat</button>
    </li>
    <li :class="{ active: modelValue === 'Dog' }">
      <button type="button" @click="activate('Dog')">Dog</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: blue;
}

.active button {
  color: blue;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
