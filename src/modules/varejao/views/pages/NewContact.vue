<template>
    <v-container class="content-page-half">
        <title-header @backAction="btnBackAction" />
        <form-contact @backAction="btnBackAction" @submit="saveVarejao" />
    </v-container>
</template>

<script>
    import FormContact from "@/modules/varejao/views/components/FormContact";
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
            ...mapGetters("Varejao", {
                formData: "getFormData"
            })
        },

        mounted() {
            this.setFormData({
                nome: "",
                celular: ""
            });
            if (this.$route.params.id) {
                this.initContactVarejao();
                this.isUpdate = true;
            }
        },

        methods: {
            ...mapActions("Varejao", [
                "getContactVarejao",
                "createContactVarejao",
                "setFormData",
                "updateContactVarejao"
            ]),

            ...mapActions(["toggleSnackbar"]),

            btnBackAction() {
                this.$router.back();
                this.setFormData({
                    nome: "",
                    celular: ""
                });
            },

            async initContactVarejao() {
                const response = await this.getContactVarejao(
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
            async saveVarejao() {
                try {
                    let response;
                    if (this.isUpdate) {
                        response = await this.updateContactVarejao({
                            id: this.$route.params.id,
                            data: this.formData
                        });
                    } else {
                        response = await this.createContactVarejao(
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

                    this.$router.push({ name: "Varejao" });
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
