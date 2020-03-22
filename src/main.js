import Vue from 'vue'
import firebase from 'firebase'
import {firebaseConfig} from '../key.js'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref = database.ref("/courses/");

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    router.replace('/home');
  }else {
    router.replace('/login');
  };

  (err) => {
    console.log(err.message)
  }
});