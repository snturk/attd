import firebase from 'firebase'
import {firebaseConfig} from '../key.js';

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function pushEmptyData(username) {
  var data = {
    courses: undefined
  }
  database.ref("/courses/" + username).push(data);
}

export {database, pushEmptyData}