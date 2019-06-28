export default {
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
};
