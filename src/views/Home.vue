<template>
  <div class="home">
    <div id="logout" class="btn" v-on:click="signOut">log out</div>
    <div id="addCourse">
      <input type="text" id="nameInput" v-model="courseName" placeholder="course name">
      <input type="number" min="0" id="limitInput" v-model="courseLimit" placeholder="course limit">
      <div id="addBtn" class="btn" v-on:click="pushCourse(courseName, courseLimit, 0)">add course</div>
    </div>
    <div id="data" v-if="datas.length > 0">
      <div id="coursesTitle">MY COURSES</div>
      <div id="coursesContainer">
      <course v-for="data in datas" :key="data.id"
        :name="data.course.name" :courseID="data.id" :username="username" :attd="data.course.attd" :lim="data.course.limit"
      >
      </course>
      </div> 
    </div>
    <div id="message" v-else>You don't have any courses yet. You can add from above panel.</div>
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
      courseName: "",
      courseLimit: 0,
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
    pushCourse(name, limit, attd){
      if(name.length > 0){
        var data = {
          name: name.toUpperCase(),
          limit: limit,
          attd: attd
        }
        database.ref("/courses/" + firebase.auth().currentUser.displayName).child("/courses").push(data);
        this.courseName = undefined;
        this.courseLimit = undefined;
        this.getCourses();
      }else{
        alert("Course name must be filled");
      }
      
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
    padding: 1% 3% 1% 3%;
    border: 1px black solid;
    border-radius: 7px;
    margin-top: 7%;
    background-color: rgba(255, 51, 102, 0.418);
    box-shadow: 0 19px 20px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
  }
  #addBtn{
    background-color: rgba(252, 24, 81, 0.459);
    margin: 0 auto;
    margin-bottom: 7%;
  }

  #message{
    margin-top: 12%;
    color: rgba(0, 0, 0, 0.767);
    font-size: 110%;
  }

  #coursesTitle{
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 170%;
    text-decoration: underline;
    margin-top: 8%;
    margin-bottom: 3%;
  }

  #coursesContainer{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4%;
    width: 85%;
    margin: 0 auto;
  }
</style>
