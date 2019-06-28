import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import User from "../../src/views/users/index.vue";

describe("User.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = shallowMount(User);
        expect( wrapper.grouped_list.length ).to.equal(4);
    });
});
