export default {
    namespaced: true,
    state:
    {
        title: "Application",
        menus: [
            {
                name: "page1",
                href: "page1",
                icon: "home",
                value: "Page 1"
            },
            {
                name: "page2",
                href: "page2",
                icon: "dashboard",
                value: "Page 2"
            },
            {
                name: "page3",
                href: "page3",
                icon: "event",
                value: "Page 3"
            },
        ],
        chosed_index: 0
    },
    mutations:{},
    actions: {}
};
