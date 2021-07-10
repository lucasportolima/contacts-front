<template>
    <v-app class="app">
        <v-main>
            <main>
                <router-view />
            </main>
        </v-main>
        <Snackbar />
    </v-app>
</template>

<script>
    import Snackbar from "@/modules/core/views/components/Snackbar";

    export default {
        components: {
            Snackbar
        },

        data() {
            return {};
        },
        created() {},
        methods: {
            foo() {}
        }
    };
</script>

<style scoped></style>
