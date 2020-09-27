import { mount, createLocalVue } from '@vue/test-utils'
import Review from '@/components/Review.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        reviewEvents: []
    }
})


describe('Review', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(Review, {
            store,
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