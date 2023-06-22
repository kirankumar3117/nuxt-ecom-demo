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



export default{

    setup(){
        const height=ref(1000)
        const loginComponent = useMain();
        
        return{
            loginComponent,
            height
        }
    },
    created(){
    },
    mounted(){
        
        this.height=screen.height
        
    }
}
</script>



