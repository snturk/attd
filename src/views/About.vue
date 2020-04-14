<template>
  <div class="about">
    <div id="aboutContainer">
      <div id="title">about</div>
      <div id="description"> <span>attd</span> is an <i>open-source</i> website that allows you to trace/follow your attendence situation manually.</div>
      <a href="http://github.com/snturk/attd" target="_blank" rel="noopener noreferrer">repo</a>
    </div>
  </div>
</template>

<style scoped>
  .about{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #aboutContainer{
    padding: 30px;
    align-items: center;
    max-width: 300px;
    width: fit-content;
    padding: 30px;
    border: 3px solid black;
    border-radius: 11px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
    background-color: rgba(255, 51, 102, 0.329);
  }

  #title{
    display: block;
    margin-bottom: 5%;
    color: black;
    font-size: 220%;
    font-family: 'Sen', sans-serif;
  }
  #description{
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
    color: rgb(32, 32, 32);
  }
  #description span{
    font-family: 'Sen', sans-serif;
    font-size: 110%;
    color: rgb(20, 20, 20);
  }
  #description i{
    color: rgb(20, 20, 20);
  }
  a{
    margin-top: 5%;
    text-decoration: underline;
  }
</style>
