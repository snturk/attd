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
import {userInf, ref} from '../database.js'
import firebase from 'firebase'
import router from '../router/index.js'
import course from '../components/Course.vue'
export default {
  name: 'Home',
  data() {
    return {
      courses: [],
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
      ref.child(this.id + "/courses").push(data);
      this.courseName = "";
      this.courseLimit = 0;
    },
    getCourses(){
      this.courses = [];
      userInf.forEach(element => {
        if(element.username == firebase.auth().currentUser.displayName){
          this.id = element.id;
          }
      });
      ref.child(this.id + "/courses").on('value', (snapshot) =>{
        var data = snapshot.val()
        var keys = Object.keys(data);
        
          for(var i = 0; i < keys.length; i++) {
            var id = keys[i];
            var name = data[id].name;
            var attd = data[id].attd;
            var limit = data[id].limit;
            this.courses.push({
              id: id,
              name: name,
              attd: attd,
              limit: limit
            });
          }
      });
      
    }
  },
  mounted(){
    setInterval(() => {
      this.getCourses();
    }, 500);
    
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
