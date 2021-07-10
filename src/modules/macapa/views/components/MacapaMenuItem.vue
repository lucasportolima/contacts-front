<template>
    <div>
        <v-menu transition="slide-x-transition" bottom right>
            <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on"> mdi-dots-horizontal </v-icon>
            </template>
            <v-list>
                <v-list-item
                    class="d-flex align-center item-dropdown"
                    @click="updateContactMacapa"
                >
                    <v-list-item-title>
                        <v-icon class="item-dropdown-icon">mdi-pencil</v-icon
                        ><span class="pl-3">Editar contato</span>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item
                    v-if="isAdmin"
                    class="d-flex align-center item-dropdown"
                    @click="situationState.dialog = true"
                >
                    <v-list-item-title>
                        <v-icon class="item-dropdown-icon">mdi-delete</v-icon
                        ><span class="pl-3">Excluir contato</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <delete-contact-macapa-dialog
            :contact="contact"
            :state="situationState"
            @success="updateData"
        />
    </div>
</template>
<script>
    import { mapGetters } from "vuex";

    import DeleteContactMacapaDialog from "@/modules/macapa/views/components/DeleteContactMacapaDialog";

    export default {
        name: "MacapaMenuItem",

        components: {
            DeleteContactMacapaDialog
        },

        props: {
            contact: {
                required: true,
                type: Object
            }
        },

        data: () => ({
            situationState: {
                dialog: false
            }
        }),

        computed: {
            ...mapGetters({
                isAdmin: "user/isAdmin"
            })
        },

        methods: {
            updateContactMacapa() {
                return this.$router.push({
                    name: "UpdateContactMacapa",
                    params: { id: this.contact.id }
                });
            },
            updateData() {
                this.$emit("updateData");
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .item-dropdown:hover {
        background-color: $white-1;

        .item-dropdown-icon {
            color: $primary-color-2;
        }
    }
</style>
