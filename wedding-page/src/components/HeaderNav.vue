<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header_nav-a">
      <img
      alt="Alba's art studio logo"
      class="header_logo"
      src="@/assets/logow.png"
    />
  </RouterLink>
    
    <button class="header_hamburger" aria-label="Menu" @click="toggleMenu">&#9776;</button>

    <nav class="header_nav" :class="['header_nav', { 'header_nav--open': isMenuOpen }]">
      <RouterLink to="/us" class="header_nav-a">Us</RouterLink>
      <RouterLink to="/when&where" class="header_nav-a">When & where</RouterLink> 
      <RouterLink to="/registry" class="header_nav-a">Registry</RouterLink>
      <RouterLink to="/rsvp" class="header_nav-a"><button class="header_button">RSVP</button></RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 7rem;
  box-shadow:  5px black;
}
.header_logo {
  width: 185px;
  height: 75px;
}
.header_hamburger {
  background: white;
  padding: 1rem; 
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
}
.header_nav {
  display: none;
  gap: 2rem;
  font-size: 1.2rem;
  text-align: center;
  flex-direction: column;
  width: 100%; 
  background: white;
  padding: 1rem; 
  border-radius: 0.2rem;
  transition: all 0.5s linear;
  position: absolute; 
  top: 100%;
  left: 0;
}
.header_nav-a {
  margin: 1.5rem;
  gap: 2rem;
  text-decoration: none;
  color: var(--color-text);
}

.header_nav-a.router-link-exact-active {
  color: var(--color-text);
}

.header_nav-a.router-link-exact-active:hover {
  background-color: transparent;
}
.header_button {
  border-color: black;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  background-color: white;
  cursor:pointer;
}

.header_nav--open {
  display: flex;
  height: 100VH;
}

@media (min-width: 768px) {
  .header {
    flex-direction: row; 
  }
  .header_nav {
    display: flex;
    flex-direction: row; 
    justify-content: flex-end;
    gap: 2rem;
    position: static; 
    top: auto;
    left: auto;
    background: none;
    padding: 0;
  }

  .header_hamburger {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 1rem 2rem;

    &_nav {
      gap: 2rem;
      font-size: 1rem;
      margin-left: auto;
      &-a {
        border-left: none;
      }
    }
  }
}
</style>
