<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>

    <section class="when_section">
      <h2>When</h2>
      <h4>11.10.2024</h4>
      <p class="when_section-title-p">13 pm</p>
      <img class="when_section-title-img" src="../assets/venue.jpg" alt="wedding venue" />
    </section>
 
</template>


<style scoped>

@media (min-width: 768px) {
  
  .when_section-title-img {
    width: 100%;
  height: 100%;
  object-fit: cover; 
  border: 0;
  }
  
}
.when_section {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  
}

.when_section-title-img {
  width: 100%; 
  height: auto; 
  margin-inline: auto;
  margin-top: 2rem;
  transition: 0.5s ease;
}

.when_section-title-p {
  font-size: 1.2rem;
}



</style>
