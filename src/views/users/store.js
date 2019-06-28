export default {
    namespaced: true,
    state:
    {
        users: [],
    },
    mutations:
    {
        SET_users(state, array)
        {
            state.users = array;
        }
    },
    actions:
    {
        FETCH_users({ commit })
        {
            let param = {
                results: 20
            };
            let query = "?" + Object.keys( param ).map( item => item + "=" + param[item] );
            let api = "https://randomuser.me/api" + query;
            fetch( api )
                .then( data => data.json() )
                .then( data => commit( "SET_users", data ) );
        }
    }
};
