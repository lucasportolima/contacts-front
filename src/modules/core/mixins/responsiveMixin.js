export default {
    computed: {
        $isMobile() {
            return (
                this.$vuetify.breakpoint?.name === "xs" ||
                this.$vuetify.breakpoint?.name === "sm"
            );
        },
        $isTablet() {
            return this.$vuetify.breakpoint?.name === "md";
        },
        $isDesktop() {
            return (
                this.$vuetify.breakpoint?.name === "lg" ||
                this.$vuetify.breakpoint?.name === "xl"
            );
        }
    }
};
