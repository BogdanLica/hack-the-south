<template>
<div class="my_text">
  <div id="timer_app">

          <h4 >
            <CountdownTimer vs-offset=8 date="2019-02-12 08:15:00"> </CountdownTimer>
          </h4>

</div>

  <div class="aaa">
    <h1 class="display-4 text-dark text-center mt-4 "> Currently available in private beta</h1>
  </div>
        

  

</div>
  

  


</template>


<script>

export default {
  name: 'Status',
   components: {
    CountdownTimer
  },
  
}

import CountdownTimer from './Timer.vue'

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#timer_app {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color:#364859; 
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}




</style>





