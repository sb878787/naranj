import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Notifications from "vt-notifications";
import Modal from "@burhanahmeed/vue-modal-2";

// require styles
import 'swiper/css/swiper.min.css'

// css
import './assets/css/style.css'

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
