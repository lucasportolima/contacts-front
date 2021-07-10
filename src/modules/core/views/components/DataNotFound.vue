<template>
    <div class="data-not-found d-flex flex-column justify-center align-center">
        <img :src="imgSrc" alt="" />
        <p class="mb-2">{{ title }}</p>
        <v-btn
            v-if="btnAction && btnLabel"
            color="primary-color-1"
            class="add-button mt-3"
            @click="btnAction"
            >{{ btnLabel }}</v-btn
        >
    </div>
</template>
<script>
    export default {
        name: "DataNotFound",

        props: {
            title: {
                type: String,
                required: true
            },
            btnLabel: {
                type: String,
                required: false,
                default: () => ""
            },
            btnAction: {
                type: Function,
                required: false,
                default: () => {}
            },
            imgSrc: {
                type: String,
                required: true
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .data-not-found {
        padding-bottom: 50px;

        img {
            width: 140px;
        }

        p {
            margin-top: 25px;
            margin-bottom: -10px;
            font-size: 18px;
            font-weight: 500;
            color: $black-1;
            text-align: center;
            width: 280px;
        }

        .add-button {
            height: 56px !important;
            width: 262px !important;
            border-radius: 5px !important;
            color: $white-1;
            text-transform: none !important;
            display: block;
        }
    }
</style>
