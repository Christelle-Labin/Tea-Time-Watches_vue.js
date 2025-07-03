import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import de 'fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import du composant 'vue-fontawesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import des icones de type 'solid' */
import { faCartShopping, fas } from '@fortawesome/free-solid-svg-icons'
/* import des icones de type 'regular' */
import { far } from '@fortawesome/free-regular-svg-icons'
/* import des icones de type 'brands' */
import { fab } from '@fortawesome/free-brands-svg-icons'

/* ajout des icônes à la bibliothèque du projet */
library.add(faCartShopping, fas, far, fab)
/* Prévient l'instance Vue.js qu'elle va utiliser le composant vue-fontawesome */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
