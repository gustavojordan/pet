<template>
  <header>
    <div class="center">
      <button v-if="petIsAuthenticated" v-on:click="logout">Logout</button>
      <button v-if="!petIsAuthenticated" v-on:click="login">Login</button>
    </div>
    <nav v-if="petIsAuthenticated">
      <ul>
        <li>
          <router-link to="/breeds">Breeds</router-link>
        </li>
        <li>
          <router-link to="/pets">Pets</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["petIsAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "logout" });
    },
    login() {
      this.$store.dispatch("login");
      this.$router.push({ name: "breeds" });
    },
  },
};
</script>

<style scoped>
center {
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  width: 100%;
  height: 4rem;
  background-color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 1px;
}

a {
  padding: 5px 15px;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  color: #013660;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: white;
  background-color: #009fdf;
}
</style>
