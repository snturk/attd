<template>
  <div class="home">
    <div id="logout" v-on:click="signOut">log out</div>
  </div>  
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
export default {
  name: 'Home',
  data() {
    return {
      username: firebase.auth().currentUser.courses
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut()
    }
  },
}
</script>
