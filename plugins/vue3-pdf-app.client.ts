import { defineNuxtPlugin } from '#app'
import VuePdfApp from 'vue3-pdf-app';
import 'vue3-pdf-app/dist/icons/main.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VuePdfApp', VuePdfApp);
})