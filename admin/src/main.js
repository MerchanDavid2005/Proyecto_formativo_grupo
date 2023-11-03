import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiBagCheckFill, BiBoxSeam, FaUserFriends, MdCategory, MdHomerepairserviceRound, FaLightbulb, MdDarkmodeRound, MdDeleteforever, BiPencilSquare, MdFibernew, CoExternalLink, CoAccountLogout } from "oh-vue-icons/icons";

addIcons(BiBagCheckFill, BiBoxSeam, FaUserFriends, MdCategory, MdHomerepairserviceRound, FaLightbulb, MdDarkmodeRound, MdDeleteforever, BiPencilSquare, MdFibernew, CoExternalLink, CoAccountLogout);

createApp(App).use(router).use(pinia).component('v-icon', OhVueIcon).mount('#app')
