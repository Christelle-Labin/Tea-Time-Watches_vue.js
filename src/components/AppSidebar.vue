<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div>
    <div v-if="isOpen" class="sidebar-overlay" @click="emit('close')"></div>

    <aside class="sidebar" :class="{ 'is-open': isOpen }">
      <nav>
        <a href="#" @click="emit('close')">Connexion</a>
        <a href="#" @click="emit('close')">Panier</a>
        <button @click="emit('close')">Acheter</button>
      </nav>
    </aside>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: var(--color-full-light-gray);
  padding: 3.5rem 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.sidebar.is-open {
  transform: translateX(0);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar nav a,
.sidebar nav button {
  font-family: 'bigmoore', serif;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--color-full-black);
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;
  padding: 0;
}

.sidebar nav a:hover,
.sidebar nav button:hover {
  color: var(--color-ttwatches-strong-yellow);
}
</style>
