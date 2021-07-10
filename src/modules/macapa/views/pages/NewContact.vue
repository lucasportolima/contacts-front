<template>
    <v-container class="content-page-half">
        <title-header @backAction="btnBackAction" />
        <form-contact @backAction="btnBackAction" @submit="saveMacapa" />
    </v-container>
</template>

<script>
    import FormContact from "@/modules/macapa/views/components/FormContact";
    import TitleHeader from "@/modules/core/views/components/TitleHeader";

    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "NewContact",

        components: {
            FormContact,
            TitleHeader
        },

        data: () => ({
            isUpdate: false
        }),

        computed: {
            ...mapGetters("Macapa", {
                formData: "getFormData"
            })
        },

        mounted() {
            this.setFormData({
                nome: "",
                celular: ""
            });
            if (this.$route.params.id) {
                this.initContactMacapa();
                this.isUpdate = true;
            }
        },

        methods: {
            ...mapActions("Macapa", [
                "getContactMacapa",
                "createContactMacapa",
                "setFormData",
                "updateContactMacapa"
            ]),

            ...mapActions(["toggleSnackbar"]),

            btnBackAction() {
                this.$router.back();
                this.setFormData({
                    nome: "",
                    celular: ""
                });
            },

            async initContactMacapa() {
                const response = await this.getContactMacapa(
                    this.$route.params.id
                );
                this.mountContact(response);
            },

            mountContact(contact) {
                this.setFormData({
                    nome: contact.nome,
                    celular: contact.celular
                });
            },
            async saveMacapa() {
                try {
                    let response;
                    if (this.isUpdate) {
                        response = await this.updateContactMacapa({
                            id: this.$route.params.id,
                            data: this.formData
                        });
                    } else {
                        response = await this.createContactMacapa(
                            this.formData
                        );
                    }

                    const message = `Contato ${
                        this.isUpdate ? "atualizado" : "cadastrado"
                    } com sucesso`;

                    this.toggleSnackbar({
                        text: response?.data?.message ?? message,
                        type: "success"
                    });

                    this.$router.push({ name: "Macapa" });
                } catch (error) {
                    this.toggleSnackbar({
                        text:
                            error?.data?.error ??
                            "Ocorreu um erro, tente novamente",
                        type: "error"
                    });
                }
            }
        }
    };
</script>

<style lang="scss" scoped></style>
