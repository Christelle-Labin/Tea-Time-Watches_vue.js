<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['toggle'])
</script>

<template>
  <button
    :class="{ 'is-open': isOpen }"
    aria-label="Toggle Navigation"
    class="menu"
    @click="$emit('toggle')"
  ></button>
</template>

<style scoped>
.menu {
  --s: 20px;
  --c: var(--color-ttwatches-strong-yellow);

  height: var(--s);
  aspect-ratio: 1;
  border: none;
  padding: 0;
  border-inline: calc(var(--s) / 2) solid #0000;
  box-sizing: content-box;
  --_g1: linear-gradient(var(--color-bg-card) 20%, #0000 0 80%, var(--color-bg-card) 0) no-repeat
    content-box border-box;
  --_g2: radial-gradient(circle closest-side at 50% 12.5%, var(--color-bg-card) 95%, #0000) repeat-y
    content-box border-box;
  background:
    var(--_g2) left var(--_p, 0px) top,
    var(--_g1) left calc(var(--s) / 10 + var(--_p, 0px)) top,
    var(--_g2) right var(--_p, 0px) top,
    var(--_g1) right calc(var(--s) / 10 + var(--_p, 0px)) top;
  background-size:
    20% 80%,
    40% 100%;
  position: relative;
  clip-path: inset(0 25%);
  --webkit-mask: linear-gradient(90deg, #0000, #000 25% 75%, #0000);
  cursor: pointer;
  transition:
    background-position 0.3s var(--_s, 0.3s),
    clip-path 0s var(--_s, 0.6s);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.menu:before,
.menu:after {
  content: '';
  position: absolute;
  border-radius: var(--s);
  inset: 40% 0;
  background: var(--color-bg-card);
  transition: transform 0.3s calc(0.3s - var(--_s, 0.3s));
}

.menu.is-open {
  clip-path: inset(0);
  --_p: calc(-1 * var(--s));
  --_s: 0s;
}
.menu.is-open:before {
  transform: rotate(45deg);
}
.menu.is-open:after {
  transform: rotate(-45deg);
}
.menu:focus-visible {
  clip-path: none;
  --webkit-mask: none;
  border: none;
  outline: 2px solid var(--color-bg-card);
  outline-offset: 5px;
}
</style>
