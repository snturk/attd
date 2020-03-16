<template>
  <div class="login">
    <div id="panelContainer">
      <div id="title">attd</div>
      <div id="loginPanel">
        <input type="text" name="" id="unameInput" placeholder="username">
        <input type="password" name="" id="pwInput" placeholder="password" style="margin-top: 20px">
        <div id="loginBtn">login</div>
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
  font-size: 54px;
  margin-bottom: 15%;
  font-family: 'Sen', sans-serif;
}

#loginPanel{
  color: #F7F9FE;
  width: fit-content;
  padding: 40px;
  font-size: 20px;
  border-radius: 11px;
  border: 3px solid black;
  background-color: rgba(255, 51, 102, 0.418);
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
}

input{
  display: block;
  margin: 0 auto;
  margin: 15px;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1.5px solid rgba(0, 0, 0, 0.651);
  transition-duration: 300ms;
  background-color: rgba(255, 255, 255, 0.212);
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
  font-family: 'Open Sans', sans-serif;
  border-radius: 7px;
  border: 1px solid black;
  background-color: #FF3366;
  cursor: pointer;
  transition-duration: 400ms;
}
#loginBtn:hover{
  background-color: black;
  color: #F7F9FE;
}

::placeholder{
  color: #000;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.001px;
}
</style>