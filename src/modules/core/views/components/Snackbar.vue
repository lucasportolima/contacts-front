<template>
    <v-snackbar
        v-model="snackbarInfo.snackbar"
        :bottom="true"
        :left="false"
        :dark="true"
        :multi-line="true"
        :right="true"
        :timeout="8000"
        :top="false"
    >
        <v-icon
            v-if="snackbarInfo.type === 'success'"
            class="icon"
            color="success"
            v-text="'mdi-checkbox-marked-circle-outline'"
        ></v-icon>

        <v-icon
            v-if="snackbarInfo.type === 'error'"
            class="icon"
            color="error"
            v-text="'mdi-close-circle-outline'"
        ></v-icon>

        <v-icon
            v-if="snackbarInfo.type === 'alert'"
            class="icon"
            color="attention"
            v-text="'mdi-alert-circle-outline'"
        ></v-icon>

        <span class="text-snackbar">
            {{ snackbarInfo.text }}
        </span>

        <template #action="{ attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                @click="snackbarInfo.snackbar = false"
            >
                <v-icon v-text="'mdi-close'"></v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "Snackbar",

        computed: {
            ...mapGetters({
                snackbarInfo: "snackbarInfo"
            })
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";
    @import "@/assets/stylesheets/components";

    @include snackbar();
</style>
