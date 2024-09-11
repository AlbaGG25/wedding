<script setup lang="ts"></script>

<template>
  <section>
    <div class="us_text">
      <h1 class="us_title">Our story</h1>
      <p class="us_paragraph">
        We met by chance at a cozy little coffee shop—what was supposed to be a quick stop turned
        into hours of conversation. From that day on, we knew there was something special between
        us. What started as friendship grew into something we couldn't imagine our lives without.
        Over theyears, we've shared so many unforgettable moments—traveling to new places, laughing
        at the little things, and being there for each other through it all. Now, we’re ready to
        take the next step in our journey and say “I do” to a lifetime together. We can’t wait to
        celebrate this new chapter with all of you!
      </p>
    </div>

    <div class="us">
      <img src="../assets/us.jpg" alt="Image of Alicia and David " class="us_img" />
      <img src="../assets/us.jpg" alt="Image of Alicia and David " class="us_img" />
      <img src="../assets/us.jpg" alt="Image of Alicia and David " class="us_img" />
      <img src="../assets/us.jpg" alt="Image of Alicia and David " class="us_img" />
    </div>
  </section>
</template>

<style scoped>
.us_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-inline: auto;
  padding-top: 10rem;
  padding-bottom: 2rem;
  background-color: white;
}
.us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.us_img {
  max-width: 18rem; 
  object-fit: cover; 
  transition: 0.5s ease;
}


@media (min-width: 768px) {
  .us {
    flex-direction: row; 
    flex-wrap: wrap; 
    gap:0;
    justify-content: center;
  }
  .us_img {
    width: 100%; 
    max-width: 19rem; 
    opacity: 0.8;
  }

  .us_img:hover {
    opacity: 1;
    filter: contrast(120%);
    transform: scale(1.2); 
    cursor: pointer;
  }
.us_text{
  color:black;
}
}
</style>
