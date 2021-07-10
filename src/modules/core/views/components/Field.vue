<template>
    <div>
        <!-- password -->
        <ValidationProvider
            v-if="type === 'password'"
            v-slot="{ errors }"
            name="password"
            :rules="{ required: isRequired }"
        >
            <v-text-field
                v-model.lazy="innerValue"
                :error-messages="errors[0]"
                type="password"
                v-bind="{ ...$attrs, ...attrs }"
                v-on="$listeners"
            ></v-text-field>
        </ValidationProvider>

        <!-- text -->
        <ValidationProvider
            v-if="type === 'genericText'"
            v-slot="{ errors }"
            name="genericText"
            :rules="{ required: isRequired }"
        >
            <v-text-field
                v-model.lazy="innerValue"
                :error-messages="errors[0]"
                type="text"
                v-bind="{ ...$attrs, ...attrs }"
                v-on="$listeners"
            ></v-text-field>
        </ValidationProvider>

        <!-- telefone -->
        <ValidationProvider
            v-if="type === 'tel'"
            v-slot="{ errors }"
            name="tel"
            :rules="{ required: isRequired }"
        >
            <v-text-field
                v-model.lazy="innerValue"
                v-mask="phoneMask"
                :error-messages="errors[0]"
                maxlength="19"
                maxlen
                type="tel"
                v-bind="{ ...$attrs, ...attrs }"
                @input="inputPhone"
                v-on="$listeners"
            ></v-text-field>
        </ValidationProvider>
    </div>
</template>

<script>
    import { extend } from "vee-validate";
    import { ValidationProvider } from "vee-validate";
    import { required } from "vee-validate/dist/rules";

    import MasksMixin from "@/modules/core/mixins/masksMixin";
    import FieldMixin from "@/modules/core/mixins/fieldMixin";

    extend("required", {
        ...required,
        message: "Esse campo é obrigatório"
    });

    export default {
        name: "Field",

        components: {
            ValidationProvider
        },

        mixins: [MasksMixin, FieldMixin],

        props: {
            type: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: false,
                default: () => ""
            },
            value: {
                type: null,
                default: () => null
            }
        },

        data: () => ({
            innerValue: ""
        }),

        watch: {
            innerValue(newVal) {
                this.$emit("input", newVal);
            },
            value(newVal) {
                this.innerValue = newVal;
            }
        },

        mounted() {
            this.innerValue = this.value;
        }
    };
</script>

<style lang="sass" scoped></style>
