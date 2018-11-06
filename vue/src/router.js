import Vue from "vue"
import Router from "vue-router"
import axios from "axios"
import WagtailPageHandler from "./views/WagtailPageHandler.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: WagtailPageHandler,
    },
  ],
})