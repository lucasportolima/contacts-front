<template>
    <v-hover v-slot="{ hover }">
        <v-card
            :elevation="hover ? 8 : 3"
            class="mx-auto pointer"
            max-width="344"
        >
            <v-card-title class="justify-center">
                <p class="text-h5 text--primary">
                    {{ title }}
                </p>
            </v-card-title>
            <v-card-text>
                <div class="text-body-1 text--secundary">
                    {{ text }}
                </div>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "Card",

        props: {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    };
</script>

<style></style>
