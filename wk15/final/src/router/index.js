import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Strings from "../views/Strings.vue"
import Major from "../views/Major.vue"
import Minor from "../views/Minor.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/strings",
      name: "strings",
      component: Strings
    },
    {
      path: "/major",
      name: "major",
      component: Major
    },
    {
      path: "/minor",
      name: "minor",
      component: Minor
    }
  ]
})

export default router
