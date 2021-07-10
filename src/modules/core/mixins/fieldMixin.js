import { pickBy, identity } from "lodash";

export default {
    props: {
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        },
        id: {
            type: null
        },
        ignoreRequiredLabel: {
            type: Boolean,
            required: false,
            default: () => false
        }
    },
    computed: {
        attrs() {
            return pickBy(
                {
                    outlined: true,
                    color: this.$vuetify.theme.themes.light["primary-color-1"],
                    label: this.getLabel(),
                    name: this.name,
                    id: this.id,
                    required: this.isRequired
                },
                identity
            );
        }
    },

    methods: {
        getLabel() {
            if (!this.label) {
                return null;
            }

            return this.ignoreRequiredLabel
                ? this.label
                : this.label.concat(`${this.isRequired ? " *" : ""}`);
        }
    }
};
