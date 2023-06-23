<template>
 <div class="bg-white position-absollute">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="mx-5 " href="#">
       <Logo/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Link</a> -->
        </li>
        <li class="nav-item dropdown">
          <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> -->
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
        </li>
      </ul>
      
    <form class="d-flex">
        <input class="form-control me-2 bg-light" type="search" placeholder="Search" aria-label="Search" v-model="search">
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
      <ul class="nav-item my-1 mx-3 d-flex " id="navbarSupportedContent" style="cursor:pointer">
        <span class="me-2" v-if="mainStore.$state.userExists" @click="handleUserLogout">
            Logout
        </span>
        <div style="margin-top: -2px;">

            <IconsUserLoginAndOut :status="mainStore.$state.userExists ? 'logout' : 'login'" class=""/> 
        </div>
        
            <span class="mx-2 " role="button" @click="handleLoginComponent" v-if="!mainStore.$state.userExists">
                Login 
            </span>
      </ul>
    </div>
   
  </div>
</nav>
 </div>
</template>

<script>
import { userSearch } from '~/composables/states';
import { useMainStore } from '~/store';

export default{
  setup(){
    const mainStore = useMainStore();
    const search = userSearch();
    
    return {
      mainStore,
      search
    }
  },
  methods:{
    handleLoginComponent(){
      this.mainStore.$state.showLoginComponent=true;
      console.log(this.search)
    },
    handleUserLogout(){
      document.cookie='';
      this.mainStore.$state.userExists=false;
      this.mainStore.$state.showLoginComponent=true
    }
  },
 
}
</script>