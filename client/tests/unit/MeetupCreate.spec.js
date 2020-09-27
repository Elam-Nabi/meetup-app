import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import MeetupCreate from '@/views/MeetupCreate.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

localVue.filter('moment', () => 'moment')

const store = new Vuex.Store({
    state: {
        reviewEvents: []
    }
})

describe('MeetupCreate', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(MeetupCreate, {
            store,
            localVue
        });
    });

    test('Should check if component exist', () => {
        expect(wrapper.findComponent(MeetupCreate).exists()).toBe(true)
    })

    test('should check if props is set in component', async () => {
        await wrapper.setProps({
            event: {
                title: 'My name is Elam'
            }
        })
        expect(wrapper.vm.event.title).toBe('My name is Elam')
    })
}); 