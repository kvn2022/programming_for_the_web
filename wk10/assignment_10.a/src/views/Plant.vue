<script setup>
import { useRoute } from 'vue-router';
import PlantList from "../data/plant-list.json"
const route = useRoute();
console.log(route.params.slug);
const plant = PlantList.find(plant => {
    return plant.slug === route.params.slug;
});
</script>
<template>
    <div class="plant-detail">
        <h1>{{ plant.title }}</h1>
        <img :src="plant.picture" :alt="plant.title" />
    </div>
    <h2>Plant Family: {{ plant.type }}</h2>
    <p>This is the #{{plant.rank}} plant in my collection</p>
</template>
<style scoped>
.plant-detail {
    border: 1px solid green;
    background-color: antiquewhite;
}

</style>