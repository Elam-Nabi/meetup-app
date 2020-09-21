import ShowEvents from '../../src/components/ShowEvents'
import { shallowMount } from '@vue/test-utils'

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe("ShowEvents", () => {
    it("Should get first event, when mocking the axios call", () => {
        var wrapper = shallowMount(ShowEvents);
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.events.length).toBe(1);
        });
    });
});
