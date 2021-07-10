export default {
    data: () => ({
        phoneMask: "+## (##) #####-####"
    }),
    computed: {
        masks() {
            return {
                phone: "+## (##) ####-####"
            };
        }
    },
    methods: {
        inputPhone() {
            return this.masks.phone;
        },
        parsePhone(phone) {
            return `${phone.slice(1, 3)}${phone.slice(5, 7)}${phone.slice(
                9,
                14
            )}${phone.slice(15)}`;
        }
    }
};
