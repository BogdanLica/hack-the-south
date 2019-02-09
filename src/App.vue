<template>
  <div id="app_1">

  <nav class="navbar navbar-expand-md navbar-light bg-dark ">

  
  <a class="navbar-brand inactive_link">
    <img src="./assets/logo.png" width="70" height="70" alt="">
  </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my_navbar123" aria-controls="my_navbar123" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse " id="my_navbar123">
    <ul class="nav navbar-nav ">
      <li class="nav-item active">
        
        <router-link to="/home">
        <a class="nav-link text-light h5"> Home <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/leaderboard">
        <a class="nav-link text-light h5"> Leaderboard <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <router-link to="/status">
        <a class="nav-link text-light h5"> Status <span class="sr-only">(current)</span> </a>
        </router-link>
      </li>
    </ul>

  </div>
</nav>
<router-view></router-view>
<footer id="sticky-footer" class="py-4 bg-dark text-light fixed-bottom">
    <div class="container text-center">
      <div class="ml-1">
        <a class="fb-ic">
              <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-1.3x"> </i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-1.3x"> </i>
            </a>
            <!-- Google +-->
            <a class="gplus-ic">
              <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-1.3x"> </i>
            </a>
            <!--Linkedin -->
            <a class="li-ic">
              <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-1.3x"> </i>
            </a>
            <!--Instagram-->
            <a class="ins-ic">
              <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-1.3x"> </i>
            </a>
    </div>
    </div>
  </footer>














    <!-- Footer Elements -->
    
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

.inactiveLink {
   pointer-events: none;
   cursor: default;


}
</style>
