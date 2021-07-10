<template>
    <v-app id="app">
        <sidebar v-if="!$route.meta.public" />
        <v-main class="main-app">
            <router-view />
            <confirm-dialog ref="confirm" />
        </v-main>
    </v-app>
</template>

<script>
    import ConfirmDialog from "@/modules/core/views/components/ConfirmDialog";
    import Sidebar from "@/modules/core/views/components/Sidebar";

    export default {
        name: "App",
        components: { ConfirmDialog, Sidebar },
        data: () => ({
            //
        })
    };
</script>
<style lang="scss">
    @import "@/assets/stylesheets/styleguide";
    @import "@/assets/stylesheets/styles";

    #app {
        background-color: $background;

        .main-app {
            z-index: 0;
        }
    }
</style>
