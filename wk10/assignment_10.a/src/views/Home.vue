<script setup>
import { RouterLink } from 'vue-router';
import PlantList from "../data/plant-list.json";
console.log("Plant List", PlantList);
</script>
<template>
    <div class="plant-container">
        <div class="plant-list-item" v-for="(plant, index) in PlantList" :key="index">
        <RouterLink :to="'/plant/' + plant.slug">{{ plant.title }}</RouterLink>
        </div>
    </div>
    
</template>