import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Notifications from "vt-notifications";
import Modal from "@burhanahmeed/vue-modal-2";
import VeeValidate from 'vee-validate';
import Vue2Crumbs from 'vue-2-crumbs';
 
// require styles
import 'swiper/css/swiper.min.css'

// css
import './assets/css/style.css'

Vue.use(Vue2Crumbs);

Vue.use(VeeValidate);

Vue.use(Notifications);

Vue.use(Modal, {
  componentName: "ModalVue"
});

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
