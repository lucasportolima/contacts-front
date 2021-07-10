<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card color="#385F73" dark>
                    <v-img
                        src="~@/assets/404.png"
                        :aspect-ratio="16 / 9"
                    ></v-img>
                    <v-card-actions>
                        <button @click="goHome">Ir para o início</button>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods: {
            goHome() {
                this.$router.push({ path: "/" });
            }
        }
    };
</script>
<style scoped lang="scss">
    h1 {
        font-size: 150px;
        line-height: 150px;
        font-weight: 700;
        color: #252932;
        text-shadow: rgba(61, 61, 61, 0.3) 1px 1px,
            rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
    }
</style>
