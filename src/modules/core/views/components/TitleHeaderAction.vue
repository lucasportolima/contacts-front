<template>
    <div class="d-flex justify-space-between flex-wrap align-end mb-5">
        <div class="row">
            <v-col cols="12" lg="8" md="8" sm="12">
                <div class="d-flex" :class="{ 'justify-center': $isMobile }">
                    <v-icon
                        v-if="$route.meta.iconBack"
                        color="white"
                        left
                        @click="$router.back()"
                        >mdi-arrow-left</v-icon
                    >
                    <h1>{{ headerTitle }}</h1>
                </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12">
                <div
                    class="d-flex justify-end"
                    :class="{ 'justify-center': $isMobile }"
                >
                    <v-btn
                        large
                        height="56"
                        width="256"
                        class="white--text"
                        @click="btnAction"
                        >{{ btnLabel }}</v-btn
                    >
                </div>
            </v-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleHeaderAction",

        props: {
            title: {
                type: String,
                required: false,
                default: () => null
            },
            btnLabel: {
                type: String,
                required: true
            },
            btnAction: {
                type: Function,
                required: true
            }
        },
        computed: {
            headerTitle() {
                return this.title ?? this.$route.meta.title;
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";
    .v-btn {
        background: linear-gradient(
            101.83deg,
            $secondary-color-1 1.02%,
            $primary-color-2 169.64%
        );
        font-size: 16px;
        font-weight: 500;
        text-transform: none;
        border-radius: 6px;
    }
</style>
