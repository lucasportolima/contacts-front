import Vue from "vue";
import Router from "vue-router";

import store from "./store";
import routerPaths from "@/routerPaths.js";
import JWTService from "@/modules/core/service/JWTService";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: routerPaths
});

router.beforeEach((to, from, next) => {
    const user = store.getters["user/getUser"];

    if (to.meta.public === false && !JWTService.isAuthenticated()) {
        return next({ name: "login" });
    }

    if (to.name === "login" && JWTService.isAuthenticated()) {
        return router.back();
    }

    if (
        to.name !== "login" &&
        JWTService.isAuthenticated() &&
        !to.meta.permissions
            ?.map(profile => profile.id)
            .find(profileId => user?.roles.includes(profileId))
    ) {
        store.dispatch("toggleSnackbar", {
            text: "Usuário sem permissão de acesso",
            type: "error"
        });
        return;
    }

    next();
});

export default router;
