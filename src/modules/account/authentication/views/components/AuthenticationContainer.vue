<template>
    <v-app
        class="background background-gradient fill"
        :class="backgroundStyles(backgroundType)"
    >
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-3 pa-10 card-authentication">
                            <slot></slot>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "AuthenticationContainer",

        props: {
            backgroundType: {
                type: String,
                validator: val => ["login"].includes(val),
                default: () => ""
            }
        },

        methods: {
            backgroundStyles(image) {
                const classesBackgroundStyles = {
                    login: "background-login"
                };
                return classesBackgroundStyles[image];
            }
        }
    };
</script>

<style lang="scss">
    @import "@/assets/stylesheets/styleguide";

    .card-authentication {
        min-width: 400px !important;
        max-width: 480px !important;
        border-radius: 6px !important;
        margin: auto !important;
    }

    .background-gradient {
        background-position: center center !important;
        background-clip: border-box !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-image: url("../../../../../assets/bg-banner-home.svg") !important;
        height: 332px;
    }
</style>
