import ShowEvents from '@/components/ShowEvents'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.filter('moment', () => 'moment')

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));


describe("ShowEvents", () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(ShowEvents, {
            localVue,
        })
    })

    it("Should get first event, when mocking the axios call", () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.events.length).toBe(1);
        });
    });
});
