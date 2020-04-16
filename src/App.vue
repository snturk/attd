<template>
  <div id="app">
    <router-view></router-view>
  </div>
    
</template>

<script>
//COLORS: #3246B3 #64BEFF #F7F9FE #FF3366
export default {

  data() {
    return {
      
    }
  },
}
</script>

<style>
body{
background: linear-gradient(45deg, rgba(103,118,199,1) 27%, rgba(255,171,171,1) 100%);
  background-size: 200%;
  animation-name: bg;
  animation-duration: 9s;
  animation-iteration-count: infinite;
}
@keyframes bg {
  0% {background-position: 100% 50%;}
  50% {background-position: 00% 50%;}
  100% {background-position: 100% 50%;}
}

#app {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
  color: darkblue;
  display: block;
  cursor: pointer;
}

::placeholder{
  color: #000;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.001px;
}

input{
  display: block;
  margin: 0 auto;
  margin: 15px;
  padding: 5%;
  font-size: 70%;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.651);
  transition-duration: 300ms;
  background-color: rgba(255, 255, 255, 0.212);
}
input:focus{
  transform: scale(1.1);
  box-shadow: 0 19px 28px rgba(0,0,0,0.30), 0 15px 13px rgba(0, 0, 0, 0.32);
}

.btn{
  margin: 0 auto;;
  width: fit-content;
  padding: 9px;
  font-size: 90%;
  color: black;
  font-family: 'Open Sans', sans-serif;
  border-radius: 7px;
  border: 2px solid black;
  cursor: pointer;
  transition-duration: 400ms;
}

.btn:hover{
  background-color: black;
  color: #F7F9FE;
}

@media screen and (max-width: 768px){
  body{
    background: rgba(103,118,199);
  }
}
   
</style>
