import Vue from "vue";
import App from "./App.vue";
import "@/modules/core/registerServiceWorker";
import router from "./router";
import store from "./store";
import { vuetify } from "@/modules/core/plugins";
import VueMask, { VueMaskDirective } from "v-mask";
import ResponsiveMixin from "@/modules/core/mixins/responsiveMixin";

Vue.mixin(ResponsiveMixin);

Vue.use(VueMask);
Vue.directive("mask", VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
