<template>
    <div class="d-flex flex-wrap justify-space-between align-baseline mb-5">
        <div class="d-flex">
            <v-icon
                v-if="$route.meta.iconBack"
                color="white"
                left
                @click="backAction"
                >mdi-arrow-left</v-icon
            >
            <h1>{{ headerTitle }}</h1>
        </div>
        <h3 v-if="subtitle" class="white--text">{{ headerSubtitle }}</h3>
    </div>
</template>

<script>
    export default {
        name: "TitleHeader",

        props: {
            title: {
                type: String,
                required: false,
                default: () => null
            },
            subtitle: {
                type: String,
                required: false,
                default: () => ""
            }
        },
        computed: {
            headerTitle() {
                return this.title ?? this.$route.meta.title;
            },
            headerSubtitle() {
                return this.subtitle ?? this.$router.meta.subtitle;
            }
        },
        methods: {
            backAction() {
                this.$emit("backAction");
            }
        }
    };
</script>
<style lang="scss" scoped></style>
