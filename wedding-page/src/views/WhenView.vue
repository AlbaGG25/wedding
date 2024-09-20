<script setup lang="ts">
import WhenComponent from '../components/WhenComponent.vue';
import WhereComponent from '../components/WhereComponent.vue'
</script>

<template>
  <section class="section">
    <WhenComponent class="box"/>
    <WhereComponent class="box"/>
  </section>
</template>

<style>
 .section{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 10rem;
    padding-top: 10rem;
  }
  .box{
    width: 100%;
    margin: 2rem 0;
    flex: 1; 
    margin: 1rem; 
    padding: 2rem;
    
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  }
@media (min-width: 1024px) {
  .section{
    flex-direction: row;
    justify-content: space-around;

  }
}
</style>
