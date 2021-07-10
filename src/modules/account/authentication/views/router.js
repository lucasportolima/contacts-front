import { BlankLayout } from "@/modules/core/views/templates";

export default [
    {
        path: "/conta",
        component: BlankLayout,
        meta: {
            title: "Login"
        },
        redirect: "/conta/login",
        hidden: true,
        children: [
            {
                path: "login",
                name: "login",
                meta: {
                    title: "Autenticar",
                    public: true
                },
                component: () =>
                    import(
                        "@/modules/account/authentication/views/pages/Login.vue"
                    )
            }
        ]
    }
];
