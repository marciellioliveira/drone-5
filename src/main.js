import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Register jw Pagination component globally
import JwPagination from 'jw-vue-pagination'
import VTooltip from "v-tooltip";



Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.component('jw-pagination', JwPagination);
Vue.use(VTooltip);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
}).$mount('#app')
