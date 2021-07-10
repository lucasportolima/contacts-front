<template>
    <v-container class="content-page">
        <title-header-action
            btn-label="Novo Contato"
            :btn-action="goToAddContact"
        />
        <v-card class="table-page pt-7">
            <div class="table-page d-flex flex-column justify-space-between">
                <div>
                    <!--filters -->
                    <template>
                        <div class="row px-5 d-flex justify-end">
                            <v-col cols="12" md="3">
                                <v-text-field
                                    id="searchContactMacapa"
                                    solo
                                    flat
                                    full-width
                                    color="primary-color-1"
                                    background-color="white-1"
                                    placeholder="Buscar contato"
                                    prepend-inner-icon="mdi-magnify"
                                    @input="
                                        setFilterDebounced(
                                            'search_field',
                                            $event
                                        )
                                    "
                                ></v-text-field>
                            </v-col>
                        </div>
                    </template>

                    <v-divider></v-divider>

                    <template v-if="!macapaContacts.length">
                        <div class="pt-10">
                            <data-not-found
                                v-if="!filterPristine"
                                title="Contato Macapa não encontrado."
                                :img-src="require('@/assets/Ativo1.svg')"
                            />

                            <data-not-found
                                v-if="filterPristine"
                                title="Você ainda não cadastrou nenhum contato Macapa, deseja cadastrar?"
                                btn-label="Cadastrar o primeiro contato Macapa"
                                :btn-action="goToAddContact"
                                :img-src="require('@/assets/Ativo1.svg')"
                            />
                        </div>
                    </template>

                    <template v-if="macapaContacts.length">
                        <v-data-table
                            :headers="headers"
                            :items="macapaContacts"
                            hide-default-footer
                        >
                            <template #[`item.id`]="{ item }">
                                <macapa-menu-item
                                    :contact="item"
                                    @updateData="updateData"
                                />
                            </template>
                        </v-data-table>
                    </template>
                </div>

                <div v-if="macapaContacts.length">
                    <pagination :state="tableInfo" />
                </div>
            </div>
        </v-card>
    </v-container>
</template>
<script>
    import MasksMixin from "@/modules/core/mixins/masksMixin";
    import TableHandler from "@/modules/core/mixins/tableHandler";
    import MacapaMenuItem from "@/modules/macapa/views/components/MacapaMenuItem";
    import DataNotFound from "@/modules/core/views/components/DataNotFound";
    import TitleHeaderAction from "@/modules/core/views/components/TitleHeaderAction";
    import Pagination from "@/modules/core/views/components/Pagination";

    import { mapActions } from "vuex";

    export default {
        name: "MacapaContact",

        components: {
            MacapaMenuItem,
            DataNotFound,
            TitleHeaderAction,
            Pagination
        },

        mixins: [MasksMixin, TableHandler],

        data: () => ({
            headers: [
                { text: "Nome", align: "start", value: "nome" },
                { text: "Celular", value: "celular" },
                { value: "id" }
            ],

            macapaContacts: [],

            stateLoadDialog: false
        }),
        created() {
            this.initFilter("search_field", "");
        },
        mounted() {
            this.fetchMacapa();
        },
        methods: {
            ...mapActions("Macapa", ["getContactsMacapa"]),
            ...mapActions(["toggleSnackbar"]),

            goToAddContact() {
                this.$router.push({ name: "NewMacapaContact" });
            },

            async fetchMacapa() {
                try {
                    const payload = this.getPayloadData();
                    const { count, results } = await this.getContactsMacapa(
                        payload
                    );
                    this.macapaContacts = results;
                    this.setTableInfo({
                        totalItems: count,
                        totalPages:
                            count / 10 < 1
                                ? 1
                                : Number.isInteger(
                                      count / this.tableInfo.itemsPerPage
                                  )
                                ? count / this.tableInfo.itemsPerPage
                                : parseInt(
                                      count / this.tableInfo.itemsPerPage
                                  ) + 1
                    });
                } catch (error) {
                    this.toggleSnackbar({
                        text:
                            error?.data?.error ??
                            "Ocorreu um erro. Tente novamente",
                        type: "error"
                    });
                }
            },
            updateData() {
                this.fetchMacapa();
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/stylesheets/buttons";
    @import "@/assets/stylesheets/styleguide";
    @import "@/assets/stylesheets/components";

    @include btn-primary();
    @include snackbar();

    ::v-deep .text-start:last-of-type {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>
