export function loading(actionFn) {
    return async function(context, payload) {
        this.dispatch("toggleLoading");
        try {
            return await actionFn.call(this, context, payload);
        } finally {
            this.dispatch("toggleLoading");
        }
    };
}
