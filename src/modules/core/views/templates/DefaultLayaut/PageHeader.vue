<template>
    <v-toolbar color="transparent" flat class="the-toolbar" :class="classes">
        <div class="d-flex justify-space-between fill">
            <div>
                <v-icon
                    v-if="!sidebarIsShow"
                    color="white"
                    @click="toggleSidebar"
                    >mdi-menu</v-icon
                >
                <v-icon
                    v-if="sidebarIsShow"
                    color="white"
                    @click="toggleSidebar"
                    >mdi-menu-open</v-icon
                >
            </div>
            <div class="d-flex justify-space-between align-center white--text">
                <span class="ml-2"
                    >Olá,
                    <strong class="username">{{ user.user_name }}</strong></span
                >

                <v-menu transition="slide-x-transition" bottom right>
                    <template #activator="{ on, attrs }">
                        <v-icon color="white" v-bind="attrs" v-on="on"
                            >mdi-menu-down</v-icon
                        >
                    </template>

                    <v-list>
                        <v-list-item class="item-dropdown" @click="logout">
                            <v-list-item-title>
                                <v-icon class="icons-dropdown"
                                    >mdi-logout</v-icon
                                ><span class="label-dropdown">Sair</span>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </v-toolbar>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "PageHeader",

        computed: {
            ...mapGetters({
                user: "user/getUser",
                sidebarIsShow: "sidebarIsShow"
            }),
            classes() {
                return {
                    ["the-toolbar-fixed"]: this.$isMobile,
                    ["the-toolbar-sidebar-active"]:
                        !this.$isMobile && this.sidebarIsShow,
                    ["the-toolbar-background"]: this.$isMobile
                };
            }
        },

        methods: {
            ...mapActions(["toggleSidebar"]),
            ...mapActions("authentication", ["logoutUser"]),
            ...mapActions("user", ["resetUser"]),

            logout() {
                this.logoutUser();
                this.resetUser();
                this.$router.push({ name: "login" });
            },

            getUserAvatar(path) {
                return path
                    ? `${process.env.VUE_APP_STORAGE_BASE_URL}${path}`
                    : null;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .the-toolbar {
        z-index: 1;
        width: 100%;
    }

    .the-toolbar-fixed {
        position: fixed;
    }

    .the-toolbar-sidebar-active {
        left: $nav-width;
        width: calc(100% - #{$nav-width});
        transition: 0.3s ease-in-out;
    }

    .username {
        background-image: linear-gradient(
            148.21deg,
            $secondary-color-1 -16.09%,
            $primary-color-2 251.08%
        );
        color: transparent;
        -webkit-background-clip: text;
    }

    .the-toolbar-background {
        background-position: center center !important;
        background-clip: border-box !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-image: url("../../../../../assets/bg-banner-home.svg") !important;
    }
</style>
