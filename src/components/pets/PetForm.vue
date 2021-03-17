<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalid: invalidFields.includes('name') }"
    >
      <label for="name">Pet Name</label>
      <input
        id="name"
        name="name"
        type="text"
        v-model.trim="name"
        @blur="validateInput"
      />
      <p v-if="invalidFields.includes('name')">Please enter a valid name!</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: invalidFields.includes('breed') }"
    >
      <label for="specie">Specie</label>
      <div
        class="form-control"
        :class="{ invalid: invalidFields.includes('specie') }"
      >
        <specie v-model="specie"></specie>
        <p v-if="invalidFields.includes('specie')">Please select a specie!</p>
      </div>

      <div
        v-if="specie !== ''"
        class="form-control"
        :class="{ invalid: invalidFields.includes('breed') }"
      >
        <label for="breed">Breed?</label>
        <select id="breed" name="breed" v-model="breed">
          <option
            v-for="breed in breedSpecie(specie)"
            v-bind:key="breed.id"
            :value="breed.id"
          >
            {{ breed.name }}
          </option>
        </select>
        <p v-if="invalidFields.includes('breed')">Please select a breed!</p>
      </div>
    </div>

    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import Specie from "./Specie.vue";

export default {
  components: {
    Specie,
  },
  computed: {
    breeds() {
      const breeds = this.$store.getters["breed/breeds"];
      return breeds;
    },
  },
  data() {
    return {
      name: "",
      breed: "",
      specie: "",
      fields: ["name", "breed", "specie"],
      invalidFields: [],
    };
  },
  methods: {
    submitForm() {
      if (this.validateInput()) {
        this.$store.dispatch("pet/add", {
          id: "",
          fullName: this.name,
          specie: this.specie,
          breed: this.breed,
        });

        this.name = "";
        this.breed = "";
        this.specie = "";
      }
    },
    breedSpecie(specieFilter) {
      const newBreeds = this.breeds.filter((breed) => {
        return breed.specie === specieFilter;
      });
      return newBreeds;
    },
    validateInput() {
      this.invalidFields = [];
      for (const field in this.fields) {
        if (this[this.fields[field]] === "") {
          this.invalidFields.push(this.fields[field]);
        }
      }
      if (this.invalidFields.length == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid p {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
