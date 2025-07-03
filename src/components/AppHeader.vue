<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppBurgerMenu from './AppBurgerMenu.vue'

defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Tea Time Watches</h1>
      <img src="../assets/pictures/logo_TTW.svg" alt="Logo" class="logo" />
      <div class="nav-end">
        <div class="burger-menu">
          <AppBurgerMenu :isOpen="isSidebarOpen" @toggle="emit('toggle-sidebar')" />
        </div>
        <nav class="main-nav">
          <a href="#">Connexion</a>
          <a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
          <button>Acheter</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 4.2rem;
  background: var(--color-full-light-gray);
  margin-left: 0;
  cursor: default;
  overflow: hidden;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 1.6rem;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  gap: 2rem;
}
.wrapper h1 {
  font-family: 'bigmoore', serif;
  font-style: normal;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  color: var(--color-full-black);
  margin-left: 3rem;
}
.nav-end {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
nav a,
nav button {
  font-family: 'bigmoore', serif;
  font-style: normal;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  color: var(--color-bg-card);
  letter-spacing: 0.05rem;
  cursor: pointer;
}
nav a:hover,
nav button:hover {
  color: var(--color-ttwatches-strong-yellow);
}
.logo {
  width: 200px;
  height: 200px;
}

/* Initial: burger menu */
.burger-menu {
  display: none;
}

@media (max-width: 768px) {
  header {
    height: 3.5rem;
  }
  .wrapper {
    padding: 0 1rem;
    gap: 1rem;
  }
  .wrapper h1 {
    font-size: 0.9rem;
    margin-left: 1rem;
  }
  .logo {
    width: 150px;
    height: 150px;
  }
  nav a,
  nav button {
    font-size: 0.9rem;
  }
}
@media (max-width: 576px) {
  .wrapper {
    padding: 0 0.5rem;
    gap: 0.5rem;
    justify-content: space-between;
  }
  .logo {
    width: 120px;
    height: 120px;
  }
  .wrapper h1,
  .main-nav {
    display: none;
  }
  .burger-menu {
    display: block;
    margin-left: auto;
  }
}
</style>
