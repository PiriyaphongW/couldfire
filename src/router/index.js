import Vue from "vue";
import VueRouter from "vue-router";
import firestore from "../views/firestore.vue"


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "firestore",
    component: firestore
  },

 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;