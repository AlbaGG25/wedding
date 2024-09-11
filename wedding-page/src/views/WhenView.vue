<script setup lang="ts">
import WhenComponent from '../components/WhenComponent.vue';
import WhereComponent from '../components/WhereComponent.vue'
</script>

<template>
  <section class="section">
    <WhenComponent />
    <WhereComponent />
  </section>
</template>

<style>
 .section{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10rem; 
  }
@media (min-width: 1024px) {
  .section{
    flex-direction: row;
    justify-content: space-around;

  }
}
</style>
