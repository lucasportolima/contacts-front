export const createInitialState = () => {
    return {
        form: {
            nome: "",
            celular: ""
        }
    };
};

export const initialState = () => {
    return {
        data: {
            create: createInitialState()
        }
    };
};

export const state = initialState();
