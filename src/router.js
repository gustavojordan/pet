import { createRouter, createWebHistory } from "vue-router";

import BreedsList from "./pages/BreedsList.vue";
import PetsList from "./pages/PetsList.vue";
import BreedAnimals from "./components/breeds/BreedAnimals.vue";
import NotFound from "./pages/NotFound.vue";
import Logout from "./pages/Logout.vue";

import BreedsFooter from "./pages/BreedsFooter.vue";
import PetsFooter from "./pages/PetsFooter.vue";

import PetForm from "./components/pets/PetForm.vue";

import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/logout" },
    {
      name: "breeds",
      path: "/breeds",
      meta: { isAuth: true },
      components: { default: BreedsList, footer: BreedsFooter },
      children: [
        {
          name: "breed-animals",
          path: ":breedId",
          component: BreedAnimals,
          props: true,
        },
      ],
    },
    {
      path: "/pets",
      meta: { isAuth: true },
      components: {
        default: PetsList,
        footer: PetsFooter,
      },
      children: [
        {
          name: "pet-form",
          path: "create",
          component: PetForm,
        },
      ],
    },
    { name: "logout", path: "/logout", component: Logout },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, _, next) {
  if (to.meta.isAuth) {
    if (store.getters.petIsAuthenticated == false) {
      const login = confirm("Do you want to login?");
      if (login) {
        store.dispatch("login");
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
