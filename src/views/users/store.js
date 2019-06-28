export default {
    namespaced: true,
    state:
    {
        list: [],
    },
    mutations:
    {
        SET_list(state, array)
        {
            state.list = array;
        }
    },
    actions:
    {
        FETCH_list({ commit })
        {
            let param = {
                results: 20
            };
            let query = "?" + Object.keys( param ).map( item => item + "=" + param[item] );
            let api = "https://randomuser.me/api" + query;
            fetch( api )
                .then( data => data.json() )
                .then( data => commit( "SET_list", data.results ) );
        }
    }
};
