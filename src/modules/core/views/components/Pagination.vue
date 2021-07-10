<template>
    <v-pagination
        v-model="state.currentPage"
        class="pb-5"
        circle
        :length="state.totalPages"
        total-visible="3"
    ></v-pagination>
</template>
<script>
    export default {
        name: "Pagination",

        props: {
            state: {
                type: Object,
                required: true
            }
        }
    };
</script>
