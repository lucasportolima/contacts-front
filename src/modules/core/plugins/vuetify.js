import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                ["primary-color-1"]: "#112E4D",
                ["primary-color-2"]: "#272b3c",
                ["secondary-color-1"]: "#c2293d",
                ["black-1"]: "#263238",
                ["black-2"]: "#455a64",
                ["black-3"]: "#607d8b",
                ["black-4"]: "#90a4ae",
                ["white"]: "#ffffff",
                ["white-1"]: "#eceff1",
                ["white-2"]: "#b0bec5",
                ["white-3"]: "#78909c",
                ["error"]: "#ff444e",
                ["success"]: "#8add46",
                ["attention"]: "#fcdb46",
                ["information"]: "#38bcff",
                ["situation-1"]: "#2ac2c2",
                ["situation-2"]: "#8add46",
                ["situation-3"]: "#90a4ae",
                ["secondary-text"]: "#757575",
                ["background-body"]: "#e5e6e8"
            }
        }
    }
});
