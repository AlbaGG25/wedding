<script setup lang="ts">
import UsComponent from '../components/UsComponent.vue'
</script>

<template>
  <div class="usView">
    <UsComponent />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .usView{
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 10rem; 
  }
}
</style>
