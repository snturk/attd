<template>
  <div class="home">
    <div id="logout" class="btn" v-on:click="signOut">log out</div>
    <div id="addCourse">
      <input type="text" id="nameInput" v-model="courseName" placeholder="course name">
      <input type="number" min="0" id="limitInput" v-model="courseLimit" placeholder="course limit">
      <div id="addBtn" class="btn" v-on:click="pushCourse(courseName, courseLimit, 0)">add course</div>
    </div>

    <div id="coursesContainer">
    <course v-for="data in datas" :key="data.id"
      :name="data.course.name" :courseID="data.id" :username="username" :attd="data.course.attd" :lim="data.course.limit"
    >
    
    </course>
    </div> 
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
import {database} from '../database.js'
import course from '../components/Course.vue'
export default {
  name: 'Home',
  data() {
    return {
      datas: [],
      username: firebase.auth().currentUser.displayName,
      courseName: undefined,
      courseLimit: undefined,
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
      this.courseName = undefined;
      this.courseLimit = undefined;
      this.getCourses();
    },
    getCourses(){
      this.datas = [];
      database.ref("/courses/" + firebase.auth().currentUser.displayName).child("/courses").on('value', (snapshot)=>{
        var data = snapshot.val();
        var keys = Object.keys(data);
        for(var i = 0; i < keys.length; i++) {
            var id = keys[i];
            var course = data[id];
            this.datas.push({
              id: id,
              course: course
            });
        }
      });
      
    },
  },
  mounted(){
    this.getCourses();
  },
  beforeUpdate(){
    this.getCourses();
  },
  
  components: {
    course
  }
}
</script>

<style>

  #logout{
    margin-top: 2%;
    box-shadow: 0 5px 7px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
  }

  #addCourse{
    margin: 0 auto;
    width: fit-content;
    border: 1px black solid;
    border-radius: 7px;
    margin-top: 5%;
    background-color: rgba(255, 51, 102, 0.418);
    box-shadow: 0 19px 20px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
  }
  #addBtn{
    background-color: rgba(252, 24, 81, 0.459);
    margin: 0 auto;
    margin-bottom: 15px;
  }

  #coursesContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    margin-top: 8%;
    max-width: 80%;
  }
</style>
