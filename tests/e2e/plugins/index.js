module.exports = (on, config) => {
    return Object.assign({}, config, {
        integrationFolder: "tests/e2e/specs",
        pluginsFolder: "tests/e2e/plugins",
        supportFolder: "tests/e2e/support"
    });
};
