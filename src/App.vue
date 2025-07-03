<script setup>
import { ref } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import AppButton from './components/AppButton.vue'
import AppCard from './components/AppCard.vue'
import AppNews from './components/AppNews.vue'
import AppFooter from './components/AppFooter.vue'
import AppGeneralContentSection from './components/AppGeneralContentSection.vue'
import AppImageTextSection from './components/AppImageTextSection.vue'

// IMPORTS D'IMAGES :
// Pour Section 2
import imgWomanGym from './src/assets/pictures/Woman-gym_h786px.jpeg'
import imgHaltereMan from './src/assets/pictures/haltere-man_AS_407452902_h786px.png'
import imgMediumS2 from './src/assets/pictures/Smartphone-smartwatch_v2_AStock_1346301982.png'

// Pour Section 3
import imgBusinessCouple from './src/assets/pictures/business-man-and-business-woman_AStock_300055308_h786px.jpeg'
import imgBusinessman from './src/assets/pictures/businessman_AStock_1373383564_h786px.jpeg'
// imgMediumS3 est la même que S2, donc réutilisation

// Pour Section 7
import imgWomanSleep from './src/assets/pictures/woman-sleep_AStock_849243561_h786px.jpeg'
import imgWomanYoga from './src/assets/pictures/woman-yoga_AStock_236453770_h786px.jpeg'

const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Import des données des cartes
const cardData = [
  {
    imageSrc: './assets/pictures/card-image-1.jpeg',
    imageAlt: 'Design Élégant',
    title: 'Design Élégant',
    description: 'Découvrez des montres au design raffiné, parfaites en toutes occasions.',
  },
  {
    imageSrc: './assets/pictures/card-image-2.jpeg',
    imageAlt: 'Technologie Avancée',
    title: 'Technologie Avancée',
    description: 'Dotées des dernières innovations pour une expérience utilisateur inégalée.',
  },
  {
    imageSrc: './assets/pictures/card-image-3.jpeg',
    imageAlt: 'Matériaux Premium',
    title: 'Matériaux Premium',
    description:
      'Fabriquées avec des matériaux de haute qualité pour une durabilité exceptionnelle.',
  },
  {
    imageSrc: './assets/pictures/card-image-4.jpeg',
    imageAlt: 'Personnalisation',
    title: 'Personnalisation',
    description: 'Bracelets interchangeables pour adapter votre montre à votre style unique.',
  },
]
</script>

<template>
  <AppSidebar :isOpen="isSidebarOpen" @close="closeSidebar" />
  <AppHeader :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />

  <main>
    <section class="section-1">
      <div class="item">
        <img src="./assets/pictures/smartwatch_darkscreen_w1440px.png" />
        <div class="content">
          <div class="title">Découvrez l'univers Tea Time Watches</div>
          <div class="topic">Des montres connectées haut de gamme</div>
          <div class="description">
            Disponibles pour homme et femme, nos montres s’accompagnent de bracelets
            interchangeables déclinés en matériaux nobles et en nuances variées, pour une
            personnalisation raffinée à votre image.
          </div>
          <AppButton button-text="Découvrir" />
        </div>
      </div>
    </section>

    <!-- Section-2 utilise AppImageTextSection -->
    <AppImageTextSection
      class="section-2-custom"
      :imgLeftSrc="imgWomanGym"
      :imgRightSrc="imgHaltereMan"
      :imgMediumSrc="imgMediumS2"
      :hasMediumImage="true"
      :imgLeftAlt="'woman gym'"
      :imgRightAlt="'haltere man'"
      :mediumImagePositionClass="'pos-section-2'"
      :reverseImagesOrder="false"
      subtitle="BIEN-ÊTRE"
      main-text="Équilibrez performance et élégance grâce à un suivi discret et intelligent."
      paragraph="Votre bien-être devient un luxe accessible : suivez votre sommeil, votre respiration et votre activité en toute quiétude."
    />

    <!-- Section 3 utilisant AppImageTextSection (avec inversion et styles spécifiques) -->
    <AppImageTextSection
      class="section-3-custom"
      :imgLeftSrc="imgBusinessCouple"
      :imgRightSrc="imgBusinessman"
      :imgMediumSrc="imgMediumS2"
      :reverse-layout="true"
      textContentAlignmentClass="align-right"
      :hasMediumImage="true"
      :mediumImagePositionClass="'pos-section-3'"
      :reverseLayout="true"
      :reverseImagesOrder="true"
      subtitle="ÉLÉGANCE"
      main-text="Lorsque l’excellence rencontre la performance."
      paragraph="Portez votre montre connectée avec style grâce à un design soigné et fonctionnel."
    />

    <!-- Section-4 utilise AppGeneralContentSection -->
    <AppGeneralContentSection
      heading="Votre montre, votre style, votre signature."
      subheading="Parcourez notre collection exclusive de montres connectées haut de gamme et trouvez celle qui correspond à votre personnalité."
      button-text="Parcourir"
      class="section-4-custom"
    >
      <template #content-area>
        <div class="carousel-container">
          <img
            src="./assets/pictures/Modele-1_Firefly_421436_h450px.png"
            alt="smartwatch-premium-leather-band"
          />
          <img
            src="./assets/pictures/Modele-2_Firefly_180142_h450px.png"
            alt="smartwatch-premium-silver"
          />
          <img
            src="./assets/pictures/Modele-3_AS_h450px.png"
            alt="double-smartwatch-premium-silver-gold"
          />
          <img
            src="./assets/pictures/Modele-4_AStock_923591545_h450px.jpeg"
            alt="smartwatch-design-band"
          />
          <img src="./assets/pictures/Modele-5_AStock_1154509470_h450px.png" alt="smart-ring" />
        </div>
      </template>
    </AppGeneralContentSection>

    <!-- Section-5 -->
    <!-- Section-5 utilise AppImageTextSection -->
    <section class="section-5">
      <img
        src="./assets/pictures/background-parallax-smartwatch-strap_AStock_1214399376_w1440px.png"
        alt="smartwatch-strap"
      />
      <div class="column-text">
        <div class="text-content">
          <div class="subtitle">PERSONNALISATION</div>
          <div class="main-text">Vivez chaque jour avec style et singularité.</div>
          <div class="paragraph">
            Élégance personnalisée, sans compromis : variez les bracelets et les cadrans pour une
            montre qui évolue avec vous, au quotidien.
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6 utilisant AppGeneralContentSection -->
    <AppGeneralContentSection
      heading="Caractéristiques"
      subheading="Explorez nos articles d’exception pour rester à la pointe des tendances actuelles."
      button-text="Explorer"
      class="section-6-custom"
    >
      <template #content-area>
        <div class="single-image-container">
          <img
            src="./assets/pictures/Smartwatch-screen_v2_AStock_1496061892_wh600px.png"
            alt="smartwatch-screen"
          />
        </div>
        <div class="cards-grid-container">
          <AppCard
            v-for="(card, index) in cardData"
            :key="index"
            :imageSrc="card.imageSrc"
            :imageAlt="card.imageAlt"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </template>
    </AppGeneralContentSection>

    <!-- Section 7 utilisant AppImageTextSection -->
    <AppImageTextSection
      class="section-7-custom"
      :imgLeftSrc="imgWomanSleep"
      :imgRightSrc="imgWomanYoga"
      :hasMediumImage="false"
      subtitle="HARMONIE ET VITALITÉ"
      main-text="Équilibre parfait, santé maîtrisée"
      paragraph="Sublimez votre bien-être avec une technologie discrète et sophistiquée. Chaque instant devient une expression d’élégance et de maîtrise personnelle."
    />

    <!-- Section 8 utilisant AppGeneralContentSection -->
    <AppGeneralContentSection
      heading="La perfection"
      subheading="Plus qu'une montre, une affirmation."
      button-text="Découvrir"
      class="section-8-custom"
    >
      <template #content-area>
        <div class="carousel-container">
          <img
            src="./assets/pictures/Modele-1_Firefly_421436_h450px.png"
            alt="smartwatch-premium-leather-band"
          />
        </div>
      </template>
    </AppGeneralContentSection>

    <AppNews />
  </main>
  <AppFooter />
</template>

<style scoped>
/* ----------     SECTION-1     ------- */
.section-1 {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
}
.item {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.content {
  position: absolute;
  top: 20%;
  left: 30%;
  transform: translate(-50%, -10%);
  width: auto;
  max-width: 50%;
  box-sizing: border-box;
  color: var(--color-full-white);
  margin-top: auto;
  letter-spacing: 0.05rem;
  line-height: normal;
}
.content .title {
  color: var(--color-ttwatches-strong-yellow);
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-shadow: 1 2px 10px var(--color-full-black);
}
.content > .topic {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 1rem 0;
  font-weight: 600;
}
.content > .description {
  font-size: 1.5rem;
}
.content > .button {
  margin-top: 3rem;
}

/* ----------     AppGeneralContentSection Overrides     ------- */
/* ----------     SECTION-4 //  SECTION-8   ------- */
/* Styles spécifiques passés par slot */
.carousel-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 450px;
  margin: 2.5rem auto 0 auto;
  max-width: 1200px;
}
.section-4-custom {
  padding-bottom: 2rem;
}
.section-4-custom .carousel-container img {
  width: 10%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out 0.5s;
  cursor: pointer;
}
.section-4-custom .carousel-container img:nth-child(4) {
  object-position: 80%;
}
.section-4-custom .carousel-container img:hover {
  width: 30%;
  transform: scale(1.05);
  border: 1.5px solid #c3922fb8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.section-8-custom .carousel-container img {
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

/* <!-- Section-5 utilise AppImageTextSection --> */
/* ----------     SECTION-5     ------- */
.section-5 {
  display: flex;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 1.5rem;
  align-items: center;
  margin-top: 2rem;
}
.section-5 img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.8rem;
  margin-right: 2rem;
}
.section-5 .column-text {
  position: absolute;
}
.section-5 .column-text .text-content {
  color: var(--color-full-light-gray);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 0.8rem;
  max-width: 65%;
  transform: translate(2%, 165%);
}
.section-5 .text-content .subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-ttwatches-strong);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  text-shadow: 0 5px 10px var(--color-full-black);
}
.section-5 .text-content .main-text {
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: 0.06rem;
}
.section-5 .text-content .paragraph {
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.02rem;
}

/* ----------     SECTION-6     ------- */
/* Styles pour la grille de cartes dans section-6 */
.cards-grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1700px;
  cursor: default;
}
.single-image-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.single-image-container img {
  max-width: 600px;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

/* ----------     MEDIA QUERIES (Global et Overrides)    ---------- */
@media (max-width: 1200px) {
  .section-1 .content {
    left: 8%;
    top: 20%;
    transform: translateY(-10%);
    max-width: 45%;
  }
  .section-1 .content > .topic {
    font-size: 2.5rem;
  }
  .section-1 .content > .description {
    font-size: 1.3rem;
  }

  /* Pour la section-5 */
  .section-5 .column-text .text-content {
    transform: translate(3%, 90%);
    max-width: 63%;
  }
  .section-5 .column-text .text-content .main-text {
    font-size: 1.6rem;
  }
  .section-5 .column-text .text-content .paragraph {
    font-size: 1rem;
  }
}
@media (max-width: 992px) {
  .section-1 .content {
    left: 5%;
    top: 25%;
    max-width: 50%;
  }
  .section-1 .content > .topic {
    font-size: 2.2rem;
  }
  .section-1 .content > .description {
    font-size: 1.2rem;
  }
  .section-1 .content > .button {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  /* Section-1 */
  .section-1 .item {
    min-height: 60vh;
  }
  .section-1 .item img {
    height: 100%;
    width: auto;
    position: absolute;
    right: -180px;
    top: 0;
  }
  .section-1 .content {
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    max-width: 55%;
    text-align: left;
  }
  .section-1 .content > .topic {
    font-size: 2rem;
  }
  .section-1 .content > .description {
    font-size: 1.1rem;
  }

  /* AppImageTextSection (sections 2, 3, 7) overrides for mobile */
  .section-2-custom,
  .section-3-custom,
  .section-7-custom {
    padding: 0 1rem;
  }

  .image-container {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .img-left,
  .img-right {
    flex: 1;
  }
  .img-large {
    width: 100%;
    height: auto;
    max-width: 444px;
    border-radius: 0.8rem;
  }
  .img-small {
    width: 100%;
    height: auto;
    max-width: 263px;
    margin-left: 0;
    border-radius: 0.8rem;
  }
  .column-text {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
  .subtitle {
    font-size: 0.9rem;
  }
  .main-text {
    font-size: 1.5rem;
  }
  .paragraph {
    font-size: 1rem;
  }

  /* AppGeneralContentSection (sections 4, 6, 8) overrides for mobile */
  .section-4-custom,
  .section-6-custom,
  .section-8-custom {
    padding: 1rem 1rem;
  }
  .section-4-custom .general-content .text-content,
  .section-6-custom .general-content .text-content,
  .section-8-custom .general-content .text-content {
    max-width: 100%;
  }
  .section-8-custom .general-content .text-content p {
    margin-bottom: 2rem;
  }
  .section-4-custom .general-content {
    padding: 0;
  }
  .section-4-custom .carousel-container img:nth-child(1),
  .section-4-custom .carousel-container img:nth-child(5) {
    display: none;
  }
  .section-4-custom .carousel-container img:nth-child(3) {
    object-position: 50%;
  }
  .section-4-custom .carousel-container img:nth-child(4) {
    object-position: 70%;
  }
  .section-4-custom .carousel-container img {
    width: 20%;
    transform: none;
  }
  .section-4-custom .carousel-container img:hover {
    width: 60%;
    transform: none;
  }

  .section-8-custom .carousel-container img {
    max-width: 100%;
    height: auto;
  }
  .single-image-container img {
    max-width: 90%;
  }

  /* Pour la section-5 */
  .section-5 .column-text .text-content {
    max-width: 65%;
    transform: translate(24%, 40%);
  }
  .section-5 .column-text .text-content .main-text {
    font-size: 1.6rem;
  }
  .section-5 .column-text .text-content .subtitle,
  .section-5 .column-text .text-content .paragraph {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  /* Section-1 */
  .section-1 .item {
    min-height: 55vh;
  }
  .section-1 .item img {
    right: -190px;
  }
  .section-1 .content {
    left: 1.5rem;
    max-width: 60%;
  }
  .section-1 .content .title {
    font-size: 1rem;
  }
  .section-1 .content > .topic {
    font-size: 1.3rem;
    margin: 0.5rem 0 1rem 0;
  }
  .section-1 .content > .description {
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    --webkit-line-clamp: 5; /* Limite le texte à 5 lignes pour éviter le débordement */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .section-1 .content > .button {
    margin-top: 1.5rem;
    transform: scale(0.9);
    transform-origin: left;
  }

  /* Section-5 */
  .section-5 img {
    width: 100%;
    height: 400px;
  }
  .section-5 .column-text .text-content {
    width: 85%;
    max-width: 450px;
    text-align: center;
    transform: translate(2%, 30%);
  }
  .section-5 .column-text .text-content .main-text {
    font-size: 1.3rem;
  }
}

/* ---------      AppNews     -------- */
@media (max-width: 576px) {
  .carousel .list .item img {
    filter: blur(3px);
    opacity: 0.7;
  }
  .carousel .list .item .content {
    left: 50%;
    top: 40%;
    transform: translate(-50%, 0);
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
  }
  .carousel .list .item .author {
    font-size: 1rem;
  }
  .carousel .list .item .title,
  .carousel .list .item .topic {
    font-size: 1.5rem;
  }
  .carousel .list .item .description {
    font-size: 0.7rem;
  }
  .carousel .list .item .dev-web {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .carousel .list .item .buttons {
    flex-direction: column;
    align-items: center;
  }
  .thumbnail {
    display: none;
  }
  .arrows {
    top: auto;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
  }
}
</style>
