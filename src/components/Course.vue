<template>
  <div class="course">
    <div id="name">{{name}}</div>
    <hr>
    <div id="lim">course limit: {{lim}}</div>
    <div id="attd">current attd: {{attd}}</div>
    <div v-on:click="removeCourse()">delete</div>
  </div>
</template>

<script>
import firebase from 'firebase'
import {database} from '../database.js'
export default {
  props: [
    "courseID","username", "name", "lim", "attd"
  ],
  data() {
    return {
      
    }
  },
  methods: {
    removeCourse(){
      database.ref("/courses/" + this.username + "/courses/" + this.courseID).remove();
    },
  },
}
</script>

<style scoped>
  .course{
    flex: 1 1 auto;
    width: fit-content;
    background-color: rgba(255, 51, 102, 0.678);
    padding: 10px;
    border-radius: 7px;
    font-family: 'Open Sans', sans-serif;
    color: black;
    margin: 5px;
  }

  #name{
    font-size: 22px;
  }
  hr{
    height: 1px;
    width: 95%;
    background-color: black;
    border: 0;
  }

  #lim{
    font-size: 17px;
    margin-top: 3%;
  }
  #attd{
    font-size: 17px;
  }
</style>