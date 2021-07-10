<template>
    <AuthenticationContainer class="login" :background-type="backgroundType">
        <v-img class="logo-img-login" src="@/assets/logo.svg"></v-img>
        <v-spacer></v-spacer>
        <h3 class="label-login black-3--text ma-3">Entrar</h3>
        <v-card-text>
            <validation-observer>
                <v-form slot-scope="{ invalid }" @submit.prevent="signIn">
                    <field
                        id="name"
                        v-model="values.username"
                        type="genericText"
                        label="Usuário"
                        name="username"
                        :is-required="true"
                        :ignore-required-label="true"
                    />

                    <field
                        id="password"
                        v-model="values.password"
                        type="password"
                        name="password"
                        label="Senha"
                        :is-required="true"
                        :ignore-required-label="true"
                    />
                    <v-layout justify-center>
                        <v-card-actions class="center">
                            <v-btn
                                id="submit"
                                class="btn-submit-form"
                                type="submit"
                                :disabled="invalid"
                                color="primary-color-1"
                                >Acessar</v-btn
                            >
                        </v-card-actions>
                    </v-layout>
                </v-form>
            </validation-observer>
        </v-card-text>
    </AuthenticationContainer>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import { ValidationObserver } from "vee-validate";

    import Field from "@/modules/core/views/components/Field";
    import AuthenticationContainer from "@/modules/account/authentication/views/components/AuthenticationContainer";

    export default {
        name: "Login",

        components: {
            ValidationObserver,
            AuthenticationContainer,
            Field
        },

        data: () => ({
            values: {
                username: "",
                password: ""
            },
            backgroundType: "login"
        }),

        computed: {
            ...mapGetters({
                user: "user/getUser"
            })
        },

        methods: {
            ...mapActions(["toggleSnackbar"]),
            ...mapActions("user", ["setUser"]),
            ...mapActions("authentication", ["login", "setToken"]),

            async signIn() {
                const payload = {
                    username: this.values.username.trim(),
                    password: this.values.password
                };

                try {
                    const {
                        access: accessToken,
                        refresh: refreshToken
                    } = await this.login(payload);

                    const user = await this.setToken({
                        accessToken,
                        refreshToken
                    });

                    this.setUser(user);

                    if (this.user.roles.length) {
                        this.$router.push({
                            name: "Macapa"
                        });
                    } else {
                        this.toggleSnackbar({
                            text: "Usuário sem permissão de acesso",
                            type: "error"
                        });
                    }
                } catch (error) {
                    this.toggleSnackbar({
                        text:
                            error?.data?.error ??
                            "Não foi possível entrar. Por favor, verifique suas credenciais de acesso novamente",
                        type: "error"
                    });
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/stylesheets/styleguide";

    .login {
        .logo-img-login {
            max-width: 200px;
            margin: auto;
        }

        .label-login {
            font-size: 20px;
            font-weight: 500;
            text-align: center;
        }

        ::v-deep .v-card__actions {
            width: 100%;
            padding: 0%;

            .btn-submit-form {
                height: 56px;
                width: 100%;
                border-radius: 5px !important;
                color: $white-1;
            }
        }
    }
</style>
