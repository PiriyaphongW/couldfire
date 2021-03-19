import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyArCbII5UhBhempnNR1gBmAkDD7c103AOM",
  authDomain: "cloud-fire-9ead7.firebaseapp.com",
  projectId: "cloud-fire-9ead7",
  storageBucket: "cloud-fire-9ead7.appspot.com",
  messagingSenderId: "793438778482",
  appId: "1:793438778482:web:fd34b9d528d02b75c17eeb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");