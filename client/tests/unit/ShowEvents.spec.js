import ShowEvents from '@/components/ShowEvents'
import { shallowMount } from '@vue/test-utils'

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe("ShowEvents", () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(ShowEvents)
    })

    it("Should get first event, when mocking the axios call", () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.events.length).toBe(1);
        });
    });
});
