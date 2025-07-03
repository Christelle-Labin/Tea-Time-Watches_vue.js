<script setup>
/* import { defineProps } from 'vue' */

defineProps({
  imageAlt: {
    type: String,
    default: 'Card image', // Texte par défaut
  },
  title: {
    type: String,
    required: true, // Le titre est obligatoire
  },
  description: {
    type: String,
    default: '', // La description peut être vide par défaut
  },
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: auto;
  background-color: var(--color-bg-card);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
  color: var(--color-full-light-gray);
  text-align: center;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--color-ttwatches-strong-yellow);
  letter-spacing: 0.05rem;
}

.card-content p {
  font-family: 'bigmoore', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--color-full-light-gray);
  letter-spacing: 0.02rem;
}

/* Media Queries pour la responsivité des cartes si vous les utilisez dans un flex/grid parent */
@media (max-width: 1200px) {
  .card {
    width: calc(50% - 20px); /* Deux cartes par ligne avec un gap */
  }
}

@media (max-width: 768px) {
  .card {
    width: 100%; /* Une carte par ligne sur les petits écrans */
  }
}
</style>
