<template>
   <div class="w-100"> 
    <FloatingBar />
    <NavBar/>
    <div class="w-75 m-auto bg-white my-5" >

       <CardProducts/> 
    </div>
   </div>
</template>

<script>
import { userToken } from '~/lib/usertoken';


export default{

   setup(){
      useHead({
         title:"shopify.in"
      });
   },
   created(){
      console.log(process.env.NUXT_BASE_URL)
   }
}
</script>

