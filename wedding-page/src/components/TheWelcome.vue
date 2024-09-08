<script setup lang="ts"></script>

<template>
  <div class="home">
    <img src="../assets/homed.jpg" alt="home image" class="home_img" />
    <h1 class="home_title">Alicia & David</h1>
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
  font-family: "Ysabeau SC", sans-serif;
  font-size: 2.5rem;
  color: var(--vt-c-black);
  text-align: center;
  padding-top: 5rem;
  position: absolute;
  top: 20%;
  opacity: 0.8;
  
}
.home_title2 {
    font-family: "Ysabeau SC", sans-serif;
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
@media (min-width: 1024px) {
  .home_title {
    font-size: 4rem;
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
}
</style>
