<template>
    <div>
        <page-header></page-header>
        <div class="background"></div>
        <!-- binding key to router-view will prevent component reuse -->
        <div class="content-page router router-desktop" :class="classes">
            <router-view :key="$route.fullPath" />
        </div>

        <snackbar />
        <loading v-if="isLoading" />
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import PageHeader from "@/modules/core/views/templates/DefaultLayaut/PageHeader";
    import Snackbar from "@/modules/core/views/components/Snackbar";
    import Loading from "@/modules/core/views/components/Loading";

    export default {
        name: "ContentLayout",

        components: {
            PageHeader,
            Snackbar,
            Loading
        },

        computed: {
            ...mapGetters({
                sidebarIsShow: "sidebarIsShow",
                isLoading: "isLoading"
            }),
            classes() {
                return {
                    ["router-desktop-sidebar-active"]:
                        !this.$isMobile && this.sidebarIsShow
                };
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .background {
        background-position: center center !important;
        background-clip: border-box !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-image: url("../../../../assets/bg-banner-home.svg") !important;
        width: 100%;
        height: 332px;
        position: absolute;
        z-index: -1;
        top: 0;
    }

    .router {
        position: absolute;
        z-index: 0;
        top: 70px;
        left: 0;
        width: 100%;
    }

    .router-desktop-sidebar-active {
        left: $nav-width;
        width: calc(100% - #{$nav-width});
        transition: 0.2s ease-in;
    }
</style>
