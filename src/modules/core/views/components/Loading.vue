<template>
    <div class="background-loading">
        <v-progress-circular
            class="loading"
            indeterminate
            color="primary"
        ></v-progress-circular>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    };
</script>

<style lang="scss" scoped>
    .background-loading {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.25);
        height: 100%;
        width: 100%;
        top: 0;
        z-index: 203; // vuetfy uses 202
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .loading {
            display: block;
            margin: auto;
            height: 80px !important;
            width: 80px !important;
        }
    }
</style>
