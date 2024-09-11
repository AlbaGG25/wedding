<template>
  <div class="where_section">
    <h2>Where</h2>
    <h4>Tyn Dwr Hall</h4>
    <p class="where_section-title-p">Tyn Dwr Hall, Tyn Dwr Road</p>
    <p class="where_section-title-p">LLangollen, LL20 8AR</p>
    <iframe
      id="map-canvas"
      class="where_section-title-map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Juan de Borbón y Battemberg, 47 40004 Segovia (Segovia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {

  .where_section-title-map {
    max-width: 20rem;
    max-height: 14rem;
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
  max-width: 30rem;
  max-height: 25rem;
}
}
</style>
