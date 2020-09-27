import { mount, createLocalVue } from '@vue/test-utils'
import Review from '@/components/Review.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter();

const store = new Vuex.Store({
    state: {
        reviewEvents: []
    },
    getters: {
        currentReview: state => id => {
            return state.reviewEvents.filter(review => review.id === id)
        }
    }
})


describe('Review', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(Review, {
            store,
            router,
            localVue
        });
    });

    test('Check if name input store value in data property', async () => {
        const nameInput = wrapper.find('#name')
        await nameInput.setValue('Elam')
        expect(wrapper.vm.input.name).toBe('Elam')
    })

    test('check if errors show up on page when submitting empty form', async () => {
        const form = wrapper.find('form')
        await form.trigger('submit')
        expect(wrapper.vm.errors.length).toBe(2)
    })
}); 