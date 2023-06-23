<template>
    <div class=" my-4">

        <div class="d-flex position-relative" style="top:15px">

            <div>
                <div class="mx-3" style="margin-top:7px;">Sort By</div>
            </div>
            <div>
                <button class="btn">Relative</button>
            </div>
            <div>
                <button class="btn">Price: Low-High</button>
            </div>
            <div>
                <button class="btn">Price: Hign-Low</button>
            </div>
        </div>
        <hr />
        <div style="display:flex;flex-wrap:wrap;gap:50px;width:90%;justify-content:space-around" class="p-10 mx-5">
            <div v-for="product in mainStore.filterData" :key="product.id" class="mt-5">

                <div class="card cardProduct">
                    <div class="position-absolute w-100" style="text-align:center;margin-left:253px;">

                        <div style="border-radius: 75% 25% 0% 100% / 0% 0% 85% 100%;left:200px;width:45px;height:40px;background-color:white" >
    
                            <IconsWishList class="position-relative" style="top:5px;margin-left:8px;cursor:pointer"/>
                        </div>
                    </div>
                    <LazyCardProductImage :image="product.image"/>
                    <div class="card-body bg-light">
                        <h5 class="card-title w-90"
                            style=" width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{
                                product.title }}</h5>
                        <p class="card-text" style=" height: 50px;  overflow: hidden; text-overflow: ellipsis;">{{
                            product.description }}</p>
                        <div class="d-flex justify-content-between" >
                            <p> {{ product.price }}$</p>
                            <p class="me-5 d-flex bg-success text-white" style="border-radius:5px;padding:0 5px;">
                                {{ product.rating.rate }} <span class="position-relative" style="top:-3px;left:2px;">
                                    <IconsStarRating/>
                                </span> 
                            </p>

                            <p class="text-success fw-bold">
                                {{ product.rating.count }} Ratings
                            </p>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
        <!-- 
             {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
         -->
    </div>
</template>



<script >
import { useMainStore } from '~/store';



export default {
    async setup(){

        const data = await $fetch("/api/products"); 
        const mainStore=useMainStore()
        mainStore.$state.data=data;
       
        
        return {
            
            mainStore,
        }


    },
    computed:{
        products(){
            return this.mainStore.filterData
        }
    }
  
    
}
        

</script>

<style>
.cardProduct {
    width: 300px;
}

@media screen and (max-width:450px) {
    .cardProduct {
        width: 40%;

    }
}</style>