module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "plugin:vue/recommended",
        "eslint:recommended",
        "@vue/prettier"
    ],
    rules: {
        "vue/no-lone-template": "off",
        "vue/custom-event-name-casing": "off",
        "vue/no-mutating-props": "off",
        "vue/no-v-html": "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
