<!-- Composant Vue qui gère la structure d'une section general-content avec un titre <h2>, un paragraphe et le bouton AppButton + Ajout d'un slot -->
<script setup>
import AppButton from './AppButton.vue'

defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Découvrir',
  },
})
</script>

<template>
  <section class="general-section-wrapper">
    <div class="general-content">
      <div class="text-content">
        <h2>{{ heading }}</h2>
        <p>{{ subheading }}</p>
      </div>

      <!-- Slot pour le contenu spécifique (carousel, cards-grid) -->
      <slot name="content-area"></slot>

      <div class="button-container">
        <AppButton :button-text="buttonText" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.general-section-wrapper {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 2rem 1.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
}

.general-content {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-content {
  max-width: 55%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: var(--color-full-light-gray);
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.06rem;
}

p {
  font-size: 1.2rem;
  color: var(--color-full-light-gray);
  text-align: center;
  letter-spacing: 0.04rem;
  line-height: 1.5;
}

.button-container {
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.section-6-custom .general-content .button-container {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

/* Media Queries */
@media (max-width: 768px) {
  .general-section-wrapper {
    padding: 2rem 1rem;
    margin-top: 2rem;
  }
  .general-section-wrapper.section-4-custom,
  .general-section-wrapper.section-8-custom {
    margin-top: 0rem;
  }
  h2 {
    font-size: 1.8rem;
  }
}
@media (max-width: 576px) {
  .section-4-custom .general-content .text-content,
  .section-6-custom .general-content .text-content {
    max-width: 90%;
  }
}
</style>
