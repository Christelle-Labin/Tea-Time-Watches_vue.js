<!-- Composant Vue qui gère le layout des images left/right, img-medium, les positions, text-content  -->
<script setup>
defineProps({
  imgLeftSrc: { type: String, required: true },
  imgLeftAlt: { type: String, default: '' },
  imgRightSrc: { type: String, required: true },
  imgRightAlt: { type: String, default: '' },

  hasMediumImage: { type: Boolean, default: false },
  imgMediumSrc: { type: String, default: '' },
  imgMediumAlt: { type: String, default: '' },
  mediumImagePositionClass: { type: String, default: '' }, // => 'pos-left', 'pos-right' = permet une indication précise de la position img-medium

  subtitle: { type: String, required: true },
  mainText: { type: String, required: true },
  paragraph: { type: String, required: true },

  reverseLayout: { type: Boolean, default: false }, // Permet d'inverser l'ordre (image à droite, texte à gauche)
  textContentAlignmentClass: { type: String, default: '' }, // Permet d'inverser l'ordre des images img-left et img-right
  reverseImagesOrder: { type: Boolean, default: false },
})
</script>

<template>
  <section :class="['image-text-section-wrapper', { 'reverse-layout': reverseLayout }]">
    <div :class="['image-container', { 'reverse-images': reverseImagesOrder }]">
      <div
        class="img-wrapper"
        :class="{ 'small-image': !reverseImagesOrder, 'large-image': reverseImagesOrder }"
      >
        <img :src="imgLeftSrc" :alt="imgLeftAlt" />
      </div>

      <div
        v-if="hasMediumImage"
        class="img-wrapper img-medium-wrapper"
        :class="mediumImagePositionClass"
      >
        <img :src="imgMediumSrc" :alt="imgMediumAlt" class="img-medium" />
      </div>

      <div
        class="img-wrapper"
        :class="{ 'large-image': !reverseImagesOrder, 'small-image': reverseImagesOrder }"
      >
        <img :src="imgRightSrc" :alt="imgRightAlt" />
      </div>
    </div>

    <div :class="['text-content', textContentAlignmentClass]">
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h3 class="main-text">{{ mainText }}</h3>
      <p class="paragraph">{{ paragraph }}</p>
    </div>
  </section>
</template>

<style scoped>
.image-text-section-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 1.5rem;
  position: relative;
}

/* inverser Layout : permet d'inverser l'ordre de la colonne image et du texte */
.image-text-section-wrapper.reverse-layout {
  flex-direction: row-reverse;
}

.image-container {
  display: flex;
  flex: 1.5;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

image-container.reverse-images {
  flex-direction: row-reverse; /* Inverse l'ordre visuel des images */
}
.img-wrapper {
  display: flex;
  align-items: flex-end;
}
.img-wrapper img {
  width: 100%;
  height: auto; /* Maintient du ratio */
  object-fit: cover;
}
/* ---------    Styles pour les images gauche et droite  --------*/
.img-wrapper.small-image img,
.img-wrapper.large-image img {
  height: 786px;
  border-radius: 0.8rem;
}
.small-image {
  flex: 1;
}
.large-image {
  width: 526px;
  height: 786px;
  flex: 2;
  max-width: 400px;
}

/* ---------    Styles pour les images  --------*/
.img-large {
  width: 888px;
  height: 786px;
  object-fit: cover;
  display: block;
  border-radius: 0.8rem 0 0 0.8rem;
  opacity: 0.9;
}
.img-small {
  width: 526px;
  height: 786px;
  object-fit: cover;
  display: block;
  margin-left: 20px;
  border-radius: 0 0.8rem 0.8rem 0;
  opacity: 0.9;
}

/* ---------    Classes pour img-medium  --------*/
.img-medium-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 350px;
  height: auto; /* Maintient du ratio */
  max-width: 30%;
  flex-shrink: 0; /* Empêche l'image de rétrécir excessivement */
  flex-grow: 0; /* Empêche l'image de grandir excessivement */
}
.img-medium {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
/* Styles spécifiques pour chaque section via les classes passées à mediumImagePositionClass */
/* POUR LA SECTION-2-CUSTOM (utilisant .pos-section-2) */
.image-text-section-wrapper.section-2-custom .img-medium-wrapper.pos-section-2 {
  left: 50%;
  transform: translate(40%, -50%);
}
/* POUR LA SECTION-3-CUSTOM (utilisant .pos-section-3) */
.image-text-section-wrapper.section-3-custom .img-medium-wrapper.pos-section-3 {
  left: 0;
  transform: translate(90%, -50%);
}

/* Styles spécifiques pour l'opacité des img */
.image-text-section-wrapper.section-7-custom img {
  opacity: 0.9;
}
/* ---------    Styles pour la colonne de texte  --------*/
.text-content {
  position: absolute;
  z-index: 2;
  color: var(--color-full-light-gray);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.8rem;
  max-width: 50%;
  top: 68%;
  left: 3%;
}

/* Pour la section-7 */
.section-7-custom .text-content {
  transform: translate(0%, 115%);
  top: 50%;
}

/* ---------    Classes pour le texte  --------*/
.text-content.align-right {
  text-align: right;
  top: 77%;
  left: 49%;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-ttwatches-strong);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  text-shadow: 0 5px 10px var(--color-full-black);
}
.main-text {
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  color: var(--color-full-light-gray);
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: 0.06rem;
}
.paragraph {
  font-size: 1.2rem;
  color: var(--color-full-light-gray);
  line-height: 1.6;
  letter-spacing: 0.02rem;
}

/* ---------------------    Media Queries   ------------------ */
/* ---------      text-content // pos-section-2     -------- */
@media (max-width: 1420px) {
  /* Pour la section-3 */
  .section-3-custom .text-content.align-right {
    top: 70%;
    left: 55%;
    max-width: 42%;
  }
}

@media (max-width: 1200px) {
  /* Pour la section-2 */
  .section-2-custom .text-content {
    top: 70%;
    left: 3%;
    max-width: 48%;
  }
  .image-text-section-wrapper.section-2-custom .img-medium-wrapper.pos-section-2 {
    left: 39%;
  }

  /* Pour la section-3 */
  .section-3-custom .text-content.align-right {
    top: 70%;
    left: 55%;
    max-width: 42%;
  }

  /* Pour la section-7 */
  .section-7-custom .text-content {
    transform: translate(2%, 30%);
    top: 65%;
  }

  .section-2-custom .main-text,
  .section-3-custom .main-text,
  .section-5 .main-text,
  .section-7-custom .main-text {
    font-size: 1.6rem;
  }
  .section-2-custom .paragraph,
  .section-3-custom .paragraph,
  .section-5 .paragraph,
  .section-7-custom .paragraph {
    font-size: 1.1rem;
  }
}
@media (max-width: 992px) {
  /* Pour la section-2 */
  .section-2-custom .text-content {
    transform: translate(3%, 15%);
    max-width: 63%;
  }
  /* Pour la section-3 */
  .section-3-custom .text-content.align-right {
    transform: translate(-3%, 15%);
  }

  .section-2-custom > div.text-content > h3.main-text,
  .section-3-custom > div.text-content.text-content.align-right > h3.main-text {
    font-size: 1.3rem;
  }
  .section-2-custom > div.text-content > p.paragraph,
  .section-3-custom > div.text-content > h3.main-text {
    font-size: 1rem;
  }
  .section-2-custom .text-content,
  .section-3-custom .text-content.align-right {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .image-text-section-wrapper {
    flex-direction: column;
    padding: 1rem;
  }
  .image-container {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .small-image,
  .large-image {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
  /* Suppresion de .img-medium */
  .section-2-custom .img-medium,
  .section-3-custom .img-medium {
    display: none;
  }
  /* 2. Suppression d'images dans le conteneur .img-wrapper */
  .image-text-section-wrapper.section-2-custom > div.image-container > div.img-wrapper.large-image,
  .image-text-section-wrapper.reverse-layout.section-3-custom
    > div.image-container.reverse-images
    > div.img-wrapper.large-image {
    display: none;
  }

  /* Pour les section-2 et section-3*/
  .section-2-custom .text-content,
  .section-3-custom .text-content.align-right {
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 450px;
    text-align: center;
  }
  /* Pour la section-2 */
  .section-2-custom .text-content {
    transform: translate(-50%, 95%);
  }
  /* Pour la section-3 */
  .section-3-custom .text-content.align-right {
    transform: translate(-50%, 95%);
  }

  .image-text-section-wrapper.section-7-custom .text-content {
    top: 80%;
    left: 4%;
    max-width: 68%;
    transform: translate(20%, 40%);
  }
}

@media (max-width: 576px) {
  /* Pour la section-2 */
  .section-2-custom .text-content {
    transform: translate(-50%, 65%);
  }
  .image-text-section-wrapper.reverse-layout.section-3-custom
    > div.image-container.reverse-images
    > div.img-wrapper.small-image
    > img {
    object-position: 80% 20%;
  }
  /* Pour la section-3 */
  .section-3-custom .text-content.align-right {
    transform: translate(-50%, 105%);
  }

  .section-2-custom > div.text-content > h3.main-text,
  .section-3-custom > div.text-content.text-content.align-right > h3.main-text {
    font-size: 1.3rem;
  }
  .section-2-custom > div.text-content > p.paragraph,
  .section-3-custom > div.text-content > h3.main-text {
    font-size: 1rem;
  }
  .section-2-custom .text-content,
  .section-3-custom .text-content.align-right {
    width: 85%;
  }

  /* Pour section-7*/
  .image-text-section-wrapper.section-7-custom .text-content {
    width: 90%;
    max-width: 450px;
    text-align: center;
    transform: translate(1%, 20%);
  }
  .image-text-section-wrapper.section-7-custom .text-content .main-text {
    font-size: 1.3rem;
  }
}
</style>
