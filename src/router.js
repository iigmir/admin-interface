import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index.vue";
import About from "./views/about/index.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
});
