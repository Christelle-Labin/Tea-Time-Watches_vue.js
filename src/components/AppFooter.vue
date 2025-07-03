<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <footer class="footer">
    <ul class="social-icon">
      <a
        class="social-icon__link"
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="Facebook"
      >
        <font-awesome-icon :icon="['fab', 'facebook-f']" size="2x" />
      </a>
      <a
        class="social-icon__link"
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Instagram"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
      </a>
      <a
        class="social-icon__link"
        href="https://www.tiktok.com/"
        target="_blank"
        aria-label="TikTok"
      >
        <font-awesome-icon :icon="['fab', 'tiktok']" size="2x" />
      </a>
      <a
        class="social-icon__link"
        href="https://www.youtube.com/"
        target="_blank"
        aria-label="YouTube"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
      </a>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Store</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Panier</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
    </ul>
    <p>
      &copy;2025
      <a href="https://github.com/Christelle-Labin" target="_blank">Labin Christelle </a>
      | projet conceptuel avec Vue.js | Tous droits réservés.
    </p>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background: var(--color-full-light-gray);
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 1rem;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: var(--color-full-black);
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}
.footer a {
  color: var(--color-full-black);
}
.footer a:hover {
  color: var(--color-ttwatches-strong-yellow);
  transition: all 0.3s ease;
}
.footer p {
  color: var(--color-full-black);
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.04rem;
}
</style>
