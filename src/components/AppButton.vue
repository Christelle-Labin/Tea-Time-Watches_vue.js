<script setup>
defineProps({
  buttonText: {
    type: String,
    default: 'Découvrir',
  },
  type: {
    type: String,
    default: 'button' /* permet de déclencher le type de bouton qui n'est pas submit */,
  },
})
</script>

<template>
  <button :type="type" class="button">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <span>{{ buttonText }}</span>
  </button>
</template>

<style scoped>
.button {
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 200px;
  height: 55px;
  border: solid rgba(255, 255, 255, 0.1) 1px;
  border-radius: 0.2rem;
  background: transparent;
  transition: all 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--color-full-gray-very-light);
    font-family: 'bigmoore', sans-serif;
    font-size: 1.2rem;
    opacity: 0.8;
    letter-spacing: 0.08rem;
  }
  &:hover > span {
    color: var(--color-ttwatches-strong-yellow);
    opacity: 1;
    transition:
      color 1s,
      opacity 1s;
  }
  .line {
    background: var(--color-ttwatches-strong-yellow);
    position: absolute;
    transition: none;
    transform: scale(0);
    opacity: 2;
  }
  .line:nth-child(1) {
    transform-origin: 100% 100%;
    height: 1px;
    width: 20%;
    bottom: 0;
  }
  .line:nth-child(4) {
    transform-origin: 0 100%;
    height: 1px;
    width: 20%;
    top: -1px;
    right: 0;
  }
  .line:nth-child(2) {
    transform-origin: 100% 100%;
    height: 100%;
    width: 1px;
    bottom: 0;
    left: -1px;
  }
  .line:nth-child(5) {
    transform-origin: 100% 0;
    height: 100%;
    width: 1px;
    bottom: 0;
    right: -1px;
  }
  .line:nth-child(3) {
    transform-origin: 0 100%;
    height: 1px;
    width: 100%;
    top: -1px;
    left: -1px;
  }
  .line:nth-child(6) {
    transform-origin: 100% 0;
    height: 1px;
    width: 100%;
    bottom: 0;
    right: -1px;
  }
  &:hover > .line {
    transform: scale(1);
    opacity: 0;
    transition: all 1s;
  }
  &:hover > .line:nth-child(2),
  &:hover > .line:nth-child(5) {
    transition-delay: 0.5s;
  }
  &:hover > .line:nth-child(3),
  &:hover > .line:nth-child(6) {
    transition-delay: 0.9s;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-5px); /* Petit effet de soulèvement au survol */
    box-shadow:
      inset 0 0 10px rgba(255, 255, 255, 0.1),
      0 4px 20px rgba(0, 0, 0, 0.2);
    transition:
      background 0.3s,
      transform 0.3s,
      box-shadow 0.3s;
  }
}
@media (max-width: 992px) {
  .button {
    width: 150px;
    height: 42px;
    span {
      font-size: 1rem;
    }
  }
}
@media (max-width: 576px) {
  .button {
    width: 150px;
    height: 42px;
    span {
      font-size: 1rem;
    }
  }
}
</style>
