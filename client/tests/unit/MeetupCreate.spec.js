import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MeetupCreate from '@/views/MeetupCreate.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

localVue.filter('moment', () => 'moment')

const store = new Vuex.Store({
    state: {
        reviewEvents: [],
        getters: {
            currentReview: state => id => {
                return state.reviewEvents.filter(review => review.id === id)
            }
        }
    }
})

describe('MeetupCreate', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MeetupCreate, {
            store,
            localVue,
            propsData: {
                event: {
                    attendees: 20
                }
            }

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

    test('Should return number of attendees from prop', async () => {
        await wrapper.setProps({
            event: {
                attendees: 20
            }
        })
        expect(wrapper.vm.event.attendees).toBe(20)
    })
    test('Should increment attendees by one', async () => {
        const addAttendee = wrapper.find('#attend')
        await addAttendee.trigger('click')
        expect(wrapper.vm.event.attendees).toBe(21)
    })
}); 