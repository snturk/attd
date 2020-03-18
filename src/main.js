import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBqaiufyIramJOsuZdETrd_6mrMDvvYaj4",
  authDomain: "attd-4a138.firebaseapp.com",
  databaseURL: "https://attd-4a138.firebaseio.com",
  projectId: "attd-4a138",
  storageBucket: "attd-4a138.appspot.com",
  messagingSenderId: "929542713021",
  appId: "1:929542713021:web:0fe215c089424023c191d4",
  measurementId: "G-KT1Y1CYSPT"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')