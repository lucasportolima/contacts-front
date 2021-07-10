import { ContentLayout } from "@/modules/core/views/templates";
import { profiles } from "@/modules/core/enums/profiles.enum";

export default [
    {
        path: "/varejao",
        component: ContentLayout,
        sidebar: {
            name: "Varejao",
            icon: "mdi-account-group-outline",
            index: 3,
            permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
        },
        children: [
            {
                name: "Varejao",
                path: "",
                meta: {
                    title: "Varejao",
                    public: false,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/varejao/views/pages/VarejaoContact.vue")
            },
            {
                name: "UpdateContactVarejao",
                path: "editar-contato/:id(\\d+)",
                meta: {
                    title: "Editar Contato",
                    public: false,
                    iconBack: true,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/varejao/views/pages/NewContact.vue")
            },
            {
                name: "NewVarejaoContact",
                path: "novo-contato",
                meta: {
                    title: "Novo Contato",
                    public: false,
                    iconBack: true,
                    permissions: [profiles.ADMINISTRATOR, profiles.OPERATOR]
                },
                component: () =>
                    import("@/modules/varejao/views/pages/NewContact.vue")
            }
        ]
    }
];
