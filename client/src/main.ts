import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from './App.vue';
import router from './router';

const pinia = createPinia()

import { MdShoppingcart, FaWhatsappSquare, BiArrowLeftCircleFill, BiArrowRightCircleFill, BiSearch, MdDeleteforever, BiCartXFill } from "oh-vue-icons/icons";

addIcons(MdShoppingcart, FaWhatsappSquare, BiArrowLeftCircleFill, BiArrowRightCircleFill, BiSearch, MdDeleteforever,BiCartXFill );

createApp(App).use(router).use(pinia).component("v-icon", OhVueIcon).mount('#app')
