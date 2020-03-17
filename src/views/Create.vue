<template>
  <div class="create">
    <div id="createPanel">
      <input type="text"  id="usernameInput" placeholder="username">
      <input type="email" id="emailInput" placeholder="email">
      <input type="password" id="pwInput" placeholder="password">
      <input type="password" id="pwInput" placeholder="password confirm">
      <div id="createBtn" class="btn">create</div>
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