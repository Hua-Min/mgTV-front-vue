import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "/imgs/ia000.png",
  loading: "/imgs/ia000.png",
  attempt: 1
});

//引入reset样式
import "@/assets/css/reset.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
