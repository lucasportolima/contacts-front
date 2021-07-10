<template>
    <v-dialog v-model="state.dialog" scrollable :persistent="true" width="488">
        <v-card class="modal">
            <v-card-title class="modal-title">Contato</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <div class="pt-5">
                    <p>
                        Tem certeza que deseja excluir o Contato
                        <strong>{{ contact.nome }}</strong
                        >?
                    </p>
                </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="d-flex justify-space-between">
                <v-btn
                    class="cancel-button black-3--text"
                    color="#ffffff"
                    @click="state.dialog = false"
                    >Cancelar</v-btn
                >
                <v-btn
                    type="button"
                    color="primary-color-1"
                    class="next-step-button white--text"
                    @click="actionDeleteContactMacapa"
                    >Excluir</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import { mapActions } from "vuex";

    export default {
        name: "DeleteContactMacapaDialog",

        props: {
            contact: {
                required: true,
                type: Object
            },
            state: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions("Macapa", ["deleteContactMacapa"]),
            ...mapActions(["toggleSnackbar"]),
            async actionDeleteContactMacapa() {
                try {
                    const response = await this.deleteContactMacapa(
                        this.contact.id
                    );

                    this.$emit("success");
                    this.toggleSnackbar({
                        text:
                            response?.message ?? `Contato excluído com sucesso`,
                        type: "success"
                    });
                } catch (error) {
                    this.toggleSnackbar({
                        text:
                            error?.data?.error ??
                            "Ocorreu um erro. Tente novamente",
                        type: "error"
                    });
                } finally {
                    this.state.dialog = false;
                }
            }
        }
    };
</script>
<style></style>
