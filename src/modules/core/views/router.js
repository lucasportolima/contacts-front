import { BlankLayout } from "@/modules/core/views/templates";
export default [
    {
        name: "Home",
        path: "/",
        redirect: "/macapa"
    },
    {
        name: "PageNotFound",
        path: "*",
        component: BlankLayout,
        redirect: "/404",
        children: [
            {
                path: "/404",
                meta: {
                    public: true
                },
                component: () =>
                    import("@/modules/core/views/pages/NotFound.vue")
            }
        ]
    }
];
