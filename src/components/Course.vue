<template>
  <div class="course">
    <div id="name">{{name}}</div>
    <hr>
    <div id="lim">course limit: <b>{{lim}}</b></div>
    <div id="attdContainer" v-if="attd != 0">
    <div id="attdbox" v-for="(n, index) in attd"></div>
    </div>
    <div id="opsContainer">
      <div class="attdChange" id="attdPlus" v-on:click="changeAttd('+')">+</div>
      <div class="attdChange" id="attdMinus" v-on:click="changeAttd('-')">-</div>
    </div>
    <div class="btn" id="delete" v-on:click="removeCourse()">delete</div>
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
    changeAttd(cmd){
      var ref = database.ref("/courses/" + this.username + "/courses/" + this.courseID + "/attd");
      if(cmd == "+"){
        ref.set(this.attd + 1);
      }else if(cmd == "-"){
        if(this.attd > 0){
          ref.set(this.attd - 1);
        }
      }
    }
  },
}
</script>

<style scoped>
  .course{
    flex: 1 1 auto;
    background-color: rgba(255, 51, 102, 0.678);
    padding: 10px;
    border-radius: 7px;
    border: 1.2px solid black;
    box-shadow: 0 19px 20px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
    font-family: 'Open Sans', sans-serif;
    color: black;
    flex-basis: 20%;
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 3%;
  }
  #attdContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  #attdbox{
    padding: 5px;
    background-color: black;
    margin: 5px;
    margin-bottom: 10%; /* (100-32*3)/2 */
    margin-top: 10%;
    border-radius: 50%;
  }
  #opsContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .attdChange{
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;
    text-align: center;
    font-size: 20px;
    border: 3px solid black;
    margin: 15px;
  }

  #attdPlus{
    background-color: #FF3366;
  }
  #attdMinus{
    background-color: #64BEFF;
  }

  #delete{
    margin: 15px;
  }
</style>