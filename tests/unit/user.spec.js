import { expect } from "chai";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import User from "../../src/views/users/index.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("User.vue", () =>
{
    let store;
    let users;
    beforeEach(() =>
    {
        users = {
            namespaced: true,
            state: {
                list: [
                    {},{},{},{},{},
                    {},{},{},{},{},
                    {},{},{},{},{},
                    {},{},{},{},{}
                ]
            },
            actions: {
                FETCH_list: () => {}
            },
        };
        store = new Vuex.Store({
            state: {},
            modules: { users }
        });
    });
    // Test cases
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
        expect( grouped_list ).to.deep.equal( correct_case1 );
    });
});
