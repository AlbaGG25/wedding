<script setup lang="ts">
import {  RouterView } from 'vue-router';
import HeaderNav from "./components/HeaderNav.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>

  <HeaderNav />
   <RouterView />
  <FooterComponent />

</template>

<style scoped>
 
</style>
