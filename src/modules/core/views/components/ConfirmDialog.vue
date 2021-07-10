<template>
    <v-dialog
        v-model="dialog"
        scrollable
        :persistent="true"
        :origin="'center left'"
        :max-width="options.width"
        :style="{ zIndex: options.zIndex }"
        @keydown.esc="cancel"
    >
        <v-card class="modal">
            <v-card-title class="modal-title">{{ title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text v-show="!!message" class="modal-content">
                {{ message }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-space-between">
                <v-btn
                    color="#ffffff"
                    class="cancel-button black-3--text"
                    @click.native="cancel"
                    >Cancelar</v-btn
                >
                <v-btn
                    type="submit"
                    color="secondary-color-1"
                    class="next-step-button white--text"
                    @click.native="agree"
                    >Confirmar</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ConfirmDialog",

        data: () => ({
            dialog: false,
            resolve: null,
            reject: null,
            message: null,
            title: null,
            options: {
                width: 500,
                zIndex: 200
            }
        }),
        methods: {
            open(title, message, options) {
                this.dialog = true;
                this.title = title;
                this.message = message;
                this.options = Object.assign(this.options, options);
                return new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
            },
            agree() {
                this.resolve(true);
                this.dialog = false;
            },
            cancel() {
                this.resolve(false);
                this.dialog = false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .modal {
        border-radius: 6px !important;

        .modal-title {
            font-size: 24px !important;
            font-weight: 400 !important;
            color: $black-1 !important;
            opacity: 0.9 !important;
            padding: 20px 0px 15px 25px !important;
        }
    }

    .modal-content {
        padding: 24px 20px !important;
    }

    ::v-deep .v-dialog.v-dialog--active.v-dialog--scrollable {
        width: 100% !important;
        max-width: fit-content !important;
        min-width: 488px !important;
        overflow: hidden;
    }
</style>
