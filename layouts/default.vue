<template>
    <div>
        <UserLogin v-if="mainStore.$state.showLoginComponent"/>

        <div class="bg-light" :class="mainStore.$state.showLoginComponent ? 'fixedWindow' : ''" >
            <!-- <slot/>
            <NavBar/> -->
            <slot/>
           
        </div>
    </div>
</template>

<script>
import { useMainStore } from '~/store';




export default{

    setup(){
        const mainStore = useMainStore();
        return{
            
            mainStore
        }
    },
    async created(){
    var cookieValue = useCookie('token');
    var token = cookieValue;
    await this.mainStore.checkForUser(token.value);
  }
    
   
}
</script>



