import { mount, RouterLinkStub } from "@vue/test-utils";
import Meetups from '@/views/Meetups.vue';

const wrapper = mount(Meetups, {
    stubs: {
        RouterLink: RouterLinkStub,
    },
});

describe('Meetups.vue', () => {
    test('Show what url is set in the to prop, on a router link', () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/meetupcard");
    })
})