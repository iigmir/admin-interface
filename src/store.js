import Vue from "vue";
import Vuex from "vuex";
import layout from "./layout/store/layout";
import sidemenu from "./layout/store/sidemenu";
import users from "./views/users/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:
    {
        layout,
        sidemenu,
        users
    },
    state: {},
    mutations: {},
    actions: {}
});
