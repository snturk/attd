<template>
  <div id="app">
    <router-view></router-view>
  </div>
    
</template>

<script>
//COLORS: #3246B3 #64BEFF #F7F9FE #FF3366
import router from './router/index.js'
export default {

  data() {
    return {

    }
  },
  created(){
    router.push("/login");
  }
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
</style>
