import firebase from 'firebase'
import {firebaseConfig} from '../key.js';

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref = database.ref("/courses");

var userInf = [];

ref.on('value', getData);
ref.on('child_changed', getData);

function getData(snapshot) {
  userInf = [];
  var data = snapshot.val()
  var keys = Object.keys(data);
  
    for(var i = 0; i < keys.length; i++) {
      var id = keys[i];
      var username = data[id].username;
      var courses = data[id].courses;
      userInf.push({
        id: id,
        username: username,
        courses: courses
      });
    }
}

function pushEmptyData(username) {
  var data = {
    courses: undefined
  }
  database.ref("/courses/" + username).push(data);
}

export {ref, userInf, database, pushEmptyData}