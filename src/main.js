import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    router.push('/home', ()=>{});
  }else {
    router.push('/login', ()=>{});
  };

  (err) => {
    console.log(err.message)
  }
});