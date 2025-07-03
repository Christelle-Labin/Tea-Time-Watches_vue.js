<!-- Composant Vue qui gère la structure de la newsletter -->
<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'

const email = ref('')
const message = ref('')
const messageType = ref('') // 'success' ou 'error'

/* Simulation d'une réponse */
const subscribe = () => {
  if (email.value) {
    setTimeout(() => {
      message.value = 'Merci pour votre inscription !'
      messageType.value = 'success'
      email.value = '' // Réinitialise le champ après l'inscription
    }, 1000)
  } else {
    message.value = 'Veuillez entrer une adresse e-mail valide.'
    messageType.value = 'error'
  }
}
</script>

<template>
  <section class="newsletter-section">
    <div class="newsletter-content">
      <h2>Restez connecté !</h2>
      <p>
        Abonnez-vous à notre newsletter afin de recevoir les dernières nouveautés et offres
        exclusives sur nos montres connectées haut de gamme.
      </p>
      <form @submit.prevent="subscribe">
        <input
          type="email"
          v-model="email"
          placeholder="Votre adresse e-mail*"
          required
          aria-label="Adresse e-mail pour l'inscription à la newsletter"
        />
        <AppButton button-text="S'abonner" type="submit" />
      </form>
      <p v-show="message" :class="messageType">{{ message }}</p>
    </div>
  </section>
</template>

<style scoped>
.newsletter-section {
  width: 100%;
  max-width: 100%;
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: var(--color-full-light-gray);
}

.newsletter-content h2 {
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.06rem;
}

.newsletter-content p {
  font-size: 1.2rem;
  max-width: 640px;
  margin: 0.5rem auto 1rem auto;
  line-height: 1.5;
  letter-spacing: 0.04rem;
}

form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

input[type='email'] {
  padding: 1rem 1.5rem;
  border: 1px solid rgba(192, 71, 250, 0.8);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--color-full-black);
  width: 100%;
  max-width: 400px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input[type='email']::placeholder {
  color: var(--color-full-black);
}

input[type='email']:focus {
  background-color: var(--color-full-white);
  border-color: rgba(192, 71, 250, 0.8);
  box-shadow:
    0px 1px 20px 0px rgba(125, 43, 196, 1),
    0 0 0 transparent;
  transition: all 400ms ease;
}

.success {
  color: var(--color-ttwatches-strong-yellow);
}

.error {
  color: red;
}
.success,
.error {
  margin: 0;
  font-weight: bold;
  transition: color 0.3s ease;
  z-index: 50;
}

/* Media Queries */
@media (max-width: 768px) {
  .newsletter-section {
    padding: 3rem 1rem;
  }

  .newsletter-content h2 {
    font-size: 2rem;
  }

  .newsletter-content p {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  form {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input[type='email'] {
    max-width: 90%;
  }
}
</style>
