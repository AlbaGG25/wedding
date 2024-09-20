<template>
  <div class="where_section">
    <h2>Where</h2>
    <h4>Tyn Dwr Hall</h4>
    <p class="where_section-title-p">Tyn Dwr Hall, Tyn Dwr Road</p>
    <p class="where_section-title-p">LLangollen, LL20 8AR</p>
    <iframe
      class="where_section-title-map"
      src="https://maps.google.com/maps?q=Tyn%20Dwr%20Hall,%20Tyn%20Dwr%20Road&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .where_section-title-map {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
  }
}
.where_section {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.where_section-title-p {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .where_section-title-map {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
  }
}
</style>
