import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:
    {
        layout:
        {
            namespaced: true,
            state:
            {
                sidebar_actived: false
            },
            mutations:
            {
                SET_sidebar_actived(state, bool)
                {
                    state.sidebar_actived = bool;
                }
            },
            actions: {}
        }
    },
    state: {},
    mutations: {},
    actions: {}
});
