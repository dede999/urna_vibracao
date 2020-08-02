import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App),
}).$mount("#app");
