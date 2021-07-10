import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import core from "@/modules/core/store/";
import authentication from "@/modules/account/authentication/store/";
import user from "@/modules/account/user/store/";
import Macapa from "@/modules/macapa/store";
import Varejao from "@/modules/varejao/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        core,
        user,
        Macapa,
        Varejao
    },
    plugins: [
        createPersistedState({
            key: "MercaFacil",
            paths: ["user", "core", "Macapa"]
        })
    ]
});
