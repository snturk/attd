<template>
  <div class="login">
    <div id="panelContainer">
      <div id="title">attd</div>
      <div id="loginPanel">
        <input type="text" name="" id="unameInput" placeholder="username">
        <input type="password" name="" id="pwInput" placeholder="password" style="margin-top: 20px">
        <div id="loginBtn">Login</div>
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

<style>
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
  font-size: 37px;
}

#loginPanel{
  color: #F7F9FE;
  width: fit-content;
  padding: 50px 40px;
  font-size: 20px;
  border-radius: 4px;
  background-color: #FF3366;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
}

input{
  display: block;
  margin: 0 auto;
  margin: 15px;
  padding: 5px;
  font-size: 17px;
  border-radius: 4px;
  transition-duration: 300ms;
}
input:focus{
  transform: scale(1.1);
}

#loginBtn{
  margin: 0 auto;
  margin-top: 20%;
  width: fit-content;
  padding: 9px;
  font-size: 19px;
  border-radius: 7px;
  border: 1px solid black;
}
</style>