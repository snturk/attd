<template>
  <div class="course">
    <div id="name">{{name}}</div>
    <hr>
    <div id="infoContainer">
      <div>course limit: <b>{{lim}}</b></div>
      <div> current attd: <b>{{attd}}</b></div>
    </div>
    <div id="attdContainer">
    <div class="box" id="attdbox" v-for="(n, index) in attd"></div>
    <div class="box" id="limitbox" v-for="(n, index) in currentlim"></div>
    </div>
    <div id="warning" v-if="currentlim == 0">you have no left limit to attd</div>
    <div id="opsContainer">
      <div class="attdChange" id="attdPlus" v-on:click="changeAttd('+')">add</div>
      <div class="attdChange" id="attdMinus" v-on:click="changeAttd('-')">remove</div>
    </div>
    <div id="delete" v-on:click="removeCourse()">delete</div>
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
  computed: {
    currentlim(){
      if(this.lim > this.attd){
        return (this.lim-this.attd)
      }
      return 0
    }
  },
  methods: {
    removeCourse(){
      database.ref("/courses/" + this.username + "/courses/" + this.courseID).remove();
    },
    changeAttd(cmd){
      var ref = database.ref("/courses/" + this.username + "/courses/" + this.courseID + "/attd");
      if(cmd == "+" && this.attd < this.lim){
        ref.set(this.attd + 1);
      }else if(cmd == "-" && this.attd > 0){
        ref.set(this.attd - 1);
      }
    }
  },
}
</script>

<style scoped>
  .course{
    flex: 1 1 auto;
    background-color: rgba(255, 51, 102, 0.750);
    padding: 1%;
    border-radius: 7px;
    border: 1.2px solid black;
    box-shadow: 0 19px 20px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
    font-family: 'Open Sans', sans-serif;
    color: black;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    max-width: 30%;
    margin: 0 auto;
    margin-top: 2%;
  }


  #name{
    font-size: 120%;
  }
  hr{
    height: 1px;
    width: 95%;
    background-color: black;
    border: 0;
  }

  #infoContainer{
    margin-top: 5%;
    font-size: 92%;
  }

  #attdContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0 auto;
    margin-top: 7%;
    margin-bottom: 7%;
  }
  .box{
    padding: 5px;
    margin: 5px;
    border-radius: 50%;
  }
  #attdbox{
    background-color: black;
  }
  #limitbox{
    background-color:white;
  }

  #warning{
    color: red;
    font-size: 92%;
    margin-top: 3%;
    margin-bottom: 3%;
    text-decoration: underline;
    background-color: black;
    padding: 5px;
    border-radius: 7px;
  }

  #opsContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .attdChange{
    width: 40%;
    padding: 3.3%;
    text-align: center;
    font-size: 110%;
    border: 3px solid black;
    border-radius: 7px;
    margin: 0 auto;
    margin: 3%;
    cursor: pointer;
  }

  #attdPlus{
    background-color: #FF3366;
  }
  #attdMinus{
    background-color: rgba(100, 190, 255, 0.850);
  }

  #delete{
    width: 85%;
    padding: 3.3%;
    font-size: 110%;
    background: black;
    color: white;
    cursor: pointer;
    transition-duration: 200ms;
    border-radius: 7px;
    margin: 0 auto;
  }
</style>