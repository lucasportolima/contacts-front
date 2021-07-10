import { ContentLayout } from "@/modules/core/views/templates";
import { profiles } from "@/modules/core/enums/profiles.enum";

export default [
    {
        path: "/macapa",
        component: ContentLayout,
        sidebar: {
            name: "Macapa",
            icon: "mdi-account-group-outline",
            index: 2,
            permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
        },
        children: [
            {
                name: "Macapa",
                path: "",
                meta: {
                    title: "Macapa",
                    public: false,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/macapa/views/pages/MacapaContact.vue")
            },
            {
                name: "UpdateContactMacapa",
                path: "editar-contato/:id(\\d+)",
                meta: {
                    title: "Editar Contato",
                    public: false,
                    iconBack: true,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/macapa/views/pages/NewContact.vue")
            },
            {
                name: "NewMacapaContact",
                path: "novo-contato",
                meta: {
                    title: "Novo Contato",
                    public: false,
                    iconBack: true,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/macapa/views/pages/NewContact.vue")
            }
        ]
    }
];
