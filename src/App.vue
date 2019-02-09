<template>
  <div id="app">

  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">
    <img src="./assets/logo.png" width="80" height="80" alt="">
  </a>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
        <router-link to="/home">
        <a class="nav-link text-light"> Home <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/leaderboard">
        <a class="nav-link text-light"> Leaderboard <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/status">
        <a class="nav-link text-light"> Status <span class="sr-only">(current)</span> </a>
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


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>
</style>
