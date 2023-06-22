<template>
    <div>
        <UserLogin v-if="loginComponent"/>

        <div class="bg-light" :class="loginComponent ? 'fixedWindow' : ''" >
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
        const loginComponent = useMain();
        const mainStore = useMainStore();
        return{
            loginComponent,
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



