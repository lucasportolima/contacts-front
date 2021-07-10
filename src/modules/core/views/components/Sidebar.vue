<template>
    <v-navigation-drawer v-model="drawer" :temporary="$isMobile" fixed>
        <v-list>
            <v-list-item>
                <v-img class="img-logo" src="@/assets/logo.svg"></v-img>
            </v-list-item>
        </v-list>

        <v-divider class="divider"></v-divider>

        <v-list nav dense>
            <v-list-item-group
                v-if="items.length"
                v-model="groups"
                active-class="primary-color-1--text text--accent-4"
            >
                <v-list-item
                    v-for="(item, indice) in items"
                    :key="indice"
                    :to="{ name: item.name }"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.sidebar.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{
                        item.sidebar.name
                    }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "Sidebar",

        data() {
            return {
                groups: null,
                items: []
            };
        },

        computed: {
            ...mapGetters({
                sidebarIsShow: "sidebarIsShow",
                user: "user/getUser"
            }),

            drawer: {
                get() {
                    return this.sidebarIsShow;
                },

                set(value) {
                    this.setSidebar(value);
                }
            }
        },

        mounted() {
            this.mountSidebarItems();
        },

        methods: {
            ...mapActions(["toggleSidebar", "setSidebar"]),

            mountSidebarItems() {
                const routeAndPermisions = this.getRouteAndPermissions();

                this.items = this.filterByPermissions(routeAndPermisions).sort(
                    this.sortBySidebarIndex
                );
            },

            getRouteAndPermissions() {
                return this.$router.options.routes
                    .filter(route => !!route.sidebar)
                    .map(route => {
                        const initialRoute = route.children.find(
                            routeChildren => routeChildren.path === ""
                        );

                        const data = {
                            sidebar: route.sidebar,
                            public: initialRoute.meta.public,
                            permissions: initialRoute.meta.permissions,
                            name: initialRoute.name
                        };
                        return data;
                    });
            },

            filterByPermissions(routeAndPermisions) {
                return routeAndPermisions.filter(
                    route =>
                        route.public ||
                        route.sidebar.permissions
                            ?.map(profile => profile.id)
                            .find(profileId =>
                                this.user?.roles?.includes(profileId)
                            )
                );
            },

            sortBySidebarIndex(first, second) {
                if (first.sidebar.index < second.sidebar.index) {
                    return -1;
                }

                if (first.sidebar.index < second.sidebar.index) {
                    return 1;
                }

                return 0;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .img-logo {
        max-width: 150px;
        display: block;
        margin: auto;
    }
</style>
