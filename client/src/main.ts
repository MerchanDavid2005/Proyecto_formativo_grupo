import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from './App.vue';
import router from './router';

const pinia = createPinia()

import { MdShoppingcart, BiWhatsapp, BiArrowLeftCircleFill, BiArrowRightCircleFill, BiSearch, MdDeleteforever } from "oh-vue-icons/icons";

addIcons(MdShoppingcart, BiWhatsapp, BiArrowLeftCircleFill, BiArrowRightCircleFill, BiSearch, MdDeleteforever);

createApp(App).use(router).use(pinia).component("v-icon", OhVueIcon).mount('#app')
