<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
        <router-link to="/home">
        <a class="nav-link"> Home <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/leaderboard">
        <a class="nav-link"> Leaderboard <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/status">
        <a class="nav-link"> Status <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
    </ul>

  </div>
</nav>
<router-view></router-view>
</div>



    
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
Vue.use(BootstrapVue);



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>

</style>
