<template>
  <div class="home">
    <div id="logout" v-on:click="signOut">log out</div>
  </div>  
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
import {userInf, ref} from '../database.js'
export default {
  name: 'Home',
  data() {
    return {
      courses: undefined,
      id: undefined,
      courseName: "",
      courseAttd: 0,
      courseLimit: 0
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
    pushCourse(name, lim, attd){
      var data = {
        name: name,
        limit: lim,
        attd: attd
      }
      ref.child(this.id + "/courses").push(data);
    },
    getCourses(){
      userInf.forEach(element => {
      if(element.username == firebase.auth().currentUser.displayName){
        this.courses = element.courses
        this.id = element.id
      }
    });
    }
  },
  mounted() {
    this.getCourses();
  },
  updated() {
    this.getCourses();
  },
}
</script>
