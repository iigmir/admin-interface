import { expect } from "chai";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import User from "../../src/views/users/index.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

/** 
 * Just don't mind "Duplicate keys detected" warning:
 * Vue optimised it's render by key.
 * In production, FETCH_list function will get datas by Web API.
*/
describe("User.vue", () =>
{
    let store;
    let mock_list = {
        email: "",
        picture: { thumbnail: "" },
        name: { last: "" },
        location: { city: "" },
    };
    let list = [];
    beforeEach(() =>
    {
        for( let i=0; i<20; i++ )
        {
            list.push(mock_list);
        }
        store = new Vuex.Store({
            modules: {
                users: {
                    namespaced: true,
                    state: { list },
                    actions: { FETCH_list: () => {} },
                }
            }
        });
    });
    it("grouped_list should be correct sorted", () =>
    {
        const wrapper = shallowMount(User, { store, localVue });
        const grouped_list = wrapper.vm.grouped_list;
        const correct_case1 = [
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}]
        ];
        expect( grouped_list.length ).to.equal( correct_case1.length );
        expect( grouped_list[0].length ).to.equal( correct_case1[0].length );
        expect( grouped_list[0].length ).to.equal( wrapper.vm.grouped_number );
    });
    it("grouped_list should sorted by grouped_number", () =>
    {
        const wrapper = shallowMount(User, { store, localVue });
        const grouped_list = wrapper.vm.grouped_list;
        expect( grouped_list[0].length ).to.equal( wrapper.vm.grouped_number );
    });
});
