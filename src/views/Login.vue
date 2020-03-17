<template>
  <div class="login">
    <div id="panelContainer">
      <div id="title">attd</div>
      <div id="loginPanel">
        <input type="text" name="" id="usernameInput" placeholder="username">
        <input type="password" name="" id="pwInput" placeholder="password" style="margin-top: 20px">
        <div id="loginBtn" class="btn">login</div>
        <div id="linkContainer">
          <router-link class="panelLink" to="/create">create an acc</router-link>
          <router-link class="panelLink" to="/about">what is attd?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.login{
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#panelContainer{
  text-align: center;
  width: fit-content;
}

#title{
  color: black;
  font-size: 290%;
  margin-bottom: 15%;
  font-family: 'Sen', sans-serif;
}

#loginPanel{
  color: #F7F9FE;
  width: fit-content;
  padding: 40px;
  border-radius: 11px;
  border: 3px solid black;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);

  animation: panelBg 9s infinite;
}

@keyframes panelBg {
  0% {background-color: rgba(255, 51, 102, 0.418);}
  50% {background-color: rgba(59, 80, 199, 0.418);}
  100% {background-color: rgba(255, 51, 102, 0.418);}
}

#loginBtn{
  background-color: rgba(252, 24, 81, 0.459);
}

#linkContainer{
  margin-top: 9%;
}
.panelLink{
  color: darkblue;
  cursor: pointer;
  font-size: 80%;
  margin-top: 6px;
}
</style>