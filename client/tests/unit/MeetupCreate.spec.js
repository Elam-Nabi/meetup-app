import { mount } from '@vue/test-utils'
import MeetupCreate from '@/views/MeetupCreate.vue'

describe('MeetupCreate', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(MeetupCreate);
    });

    test('Should check if component exist', () => {
        expect(wrapper.findComponent(MeetupCreate).exists()).toBe(true)
    })
}); 