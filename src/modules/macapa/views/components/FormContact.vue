<template>
    <v-card class="mt-3 pt-7">
        <validation-observer>
            <v-form slot-scope="{ invalid }" @submit.prevent="submitForm()">
                <div class="px-5">
                    <v-row>
                        <v-col cols="12" sm="12">
                            <field
                                id="nomeContactMacapa"
                                v-model="formData.nome"
                                type="genericText"
                                label="Nome"
                                name="name"
                                :is-required="true"
                            />
                        </v-col>
                        <v-col cols="12" sm="12">
                            <field
                                id="celularContactMacapa"
                                v-model="formData.celular"
                                type="tel"
                                label="Celular"
                                name="phoneNumber"
                                :is-required="true"
                            />
                        </v-col>
                    </v-row>
                </div>

                <v-divider></v-divider>

                <v-card-actions class="d-flex flex-wrap justify-space-between">
                    <v-btn
                        color="#FFF"
                        :block="$isMobile"
                        class="mt-1 cancel-button primary-color-1--text"
                        @click="$emit('backAction')"
                        >Voltar</v-btn
                    >

                    <v-btn
                        type="submit"
                        color="primary-color-1"
                        :disabled="invalid"
                        :block="$isMobile"
                        class="ma-0 mt-1 next-step-button white--text"
                        >Salvar</v-btn
                    >
                </v-card-actions>
            </v-form>
        </validation-observer>
    </v-card>
</template>
<script>
    import Field from "@/modules/core/views/components/Field";
    import MasksMixin from "@/modules/core/mixins/masksMixin";

    import { ValidationObserver } from "vee-validate";
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "FormContactMacapa",

        components: {
            Field,
            ValidationObserver
        },

        mixins: [MasksMixin],

        data: () => ({
            isUpdate: false
        }),

        computed: {
            ...mapGetters("Macapa", {
                formData: "getFormData"
            })
        },
        mounted() {
            if (this.$route.params.id) {
                this.isUpdate = true;
            }
        },
        methods: {
            ...mapActions("Macapa", ["setFormData"]),

            submitForm() {
                this.formData.celular = this.parsePhone(this.formData.celular);
                this.setFormData(this.formData);
                this.$emit("submit");
            }
        }
    };
</script>
<style lang="scss" scoped></style>
