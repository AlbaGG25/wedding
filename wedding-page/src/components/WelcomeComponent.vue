<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="home">
    <img src="../assets/wel.jpg" alt="home image" class="home_img" />
    <h1 class="home_title">
      <span class="home_alicia" id="alicia">Alicia</span>
      <span class="home_ampersand" id="amp">&</span>
      <span class="home_david" id="david">David</span>
    </h1>
    <h2 class="home_title2">We are getting married!</h2>
    <p class="home_text">11.10.2024</p>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
}
.home_img {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  opacity: 0.6;
}




.home_title {
  font-family: 'Ysabeau SC', sans-serif;
  font-size: 2.5rem;
  color: var(--vt-c-black);
  text-align: center;
  padding-top: 5rem;
  position: absolute;
  top: 20%;
  opacity: 0.8;
  width:100vw;
}
.home_title2 {
  font-family: 'Ysabeau SC', sans-serif;
  font-size: 1.5rem;
  color: var(--vt-c-black);
  opacity: 0.8;
  text-align: center;
  position: absolute;
  top: 55%;
}
.home_text {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vt-c-black);
  text-align: center;
  position: absolute;
  top: 70%;
}
@media (min-width: 1200px) {
  .home_title {
    font-size: 6rem;
    padding-top: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .home_title2 {
    font-size: 2.5rem;
    padding-top: 0;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

.home_alicia, .home_david {
  position: absolute;
  opacity: 0;
}


#alicia {
  left: 0;
  transform: translateX(-100vw); 
  animation: moveInFromLeft 2s forwards;
}

#david {
  right: 0;
  transform: translateX(-80vw); 
  animation: moveInFromRight 2s forwards;
}

.ampersand {
  position: relative;
  opacity: 0;
}

@keyframes moveInFromLeft {
  0% {
    transform: translateX(-100vw); 
    opacity: 0;
  }
  50% {
    transform: translateX(34vw); 
    opacity: 1;
  }
  100% {
    transform: translateX(34vw); 
    opacity: 1;
  }
}

@keyframes moveInFromRight {
  0% {
    transform: translateX(100vw); 
    opacity: 0;
  }
  50% {
    transform: translateX(-35vw); 
    opacity: 1;
  }
  100% {
    transform: translateX(-35vw); 
    opacity: 1;
  }
}
}

</style>
