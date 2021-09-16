import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About";

const routes = [
  // array of routes
  {
    path: "./about",
    name: "About",
    componenet: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // TAKES A BASE URL
  routes,
  //   and all our routes
});

export default router;
