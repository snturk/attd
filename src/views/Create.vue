<template>
  <div class="create">
    <div id="createPanel">
      <input type="text"  id="usernameInput" placeholder="username" v-model="username">
      <input type="email" id="emailInput" placeholder="email" v-model="email">
      <input type="password" id="pwInput" placeholder="password" v-model="password">
      <input type="password" id="pwCheckInput" placeholder="password confirm" v-model="passwordCheck">
      <div id="createBtn" class="btn" v-on:click="signUp()">create</div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router/index.js'
export default {
  data(){
    return{
      username: undefined,
      password: undefined,
      passwordCheck: undefined,
      email: undefined
    }
  },
  methods:{
    signUp(){
      if(this.password == this.passwordCheck && this.username.length > 2){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                firebase.auth().currentUser.updateProfile({
                    displayName: this.username,
                    courses: ["aa", "bb"],
                  }).then(function() {
                    // Update successful.
                  }).catch(function(error) {
                    alert(error)
                  });
                router.push('/login', () => {});
            },
            (err) => {
              alert('Error ' + err.message);
            }
            
            );
      }else if(this.password != this.passwordCheck){
        alert("passwords must be same");
      }else if(this.username.length <= 2){
        alert("username must have 3 or more characters");
      }
        }
    }
  }

</script>

<style scoped>
.create{
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#createPanel{
  align-items: center;
  width: fit-content;
  padding: 30px;
  border: 3px solid black;
  border-radius: 11px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
  animation: panelBg 9s infinite;
}

@keyframes panelBg {
  0% {background-color: rgba(255, 51, 102, 0.418);}
  50% {background-color: rgba(59, 80, 199, 0.418);}
  100% {background-color: rgba(255, 51, 102, 0.418);}
}

#createBtn{
  background-color: rgba(255, 51, 102, 0.342);
}
</style>