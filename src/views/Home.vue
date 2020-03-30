<template>
  <div class="home">
    <div id="logout" v-on:click="signOut">log out</div>
    <div id="addCourse">
      <input type="text" id="nameInput" v-model="courseName" placeholder="course name">
      <input type="text" id="limitInput" v-model="courseLimit" placeholder="course limit">
      <div id="addBtn" v-on:click="pushCourse(courseName, courseLimit, 0)">add course</div>
    </div>
    <div id="coursesContainer">
    <course v-for="course in courses" :key="course.id"
      :name="course.name" :courseID="course.id" :userID="id" :attd="course.attd" :lim="course.limit"
    >
    
    </course>
    </div> 
  </div>
</template>

<script>
import {userInf, ref, database} from '../database.js'
import Vuex from '../store/index.js'
import firebase from 'firebase'
import router from '../router/index.js'
import course from '../components/Course.vue'
export default {
  name: 'Home',
  data() {
    return {
      courses: [],
      username: Vuex.state.username,
      id: undefined,
      courseName: "",
      courseLimit: 0,
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
    pushCourse(name, limit, attd){
      var data = {
        name: name,
        limit: limit,
        attd: attd
      }
      database.ref("/courses/" + firebase.auth().currentUser.displayName).child("/courses").push(data);
      this.courseName = "";
      this.courseLimit = 0;
      this.getCourses();
    },
    getCourses(){
      database.ref("/courses/" + firebase.auth().currentUser.displayName).child("/courses").on('value', (snapshot)=>{
        this.courses = snapshot.val();
      });
      
    }
  },
  mounted(){
    this.getCourses();
  },
  
  components: {
    course
  }
}
</script>

<style scoped>
  #addCourse{
    margin: 0 auto;
    width: fit-content;
    border: 1px black solid;
    border-radius: 7px;
    margin-top: 5%;
  }

  #coursesContainer{
    display: flex;
    flex-direction: row;
    margin-top: 8%;
  }
</style>
