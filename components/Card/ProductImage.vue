<template>
    <div v-if="image">
        <img :src="image" class="card-img-top" alt="..." width="100px" height="300px" />

    </div>
</template>

<script setup>
defineProps({
    image:String
})
</script>