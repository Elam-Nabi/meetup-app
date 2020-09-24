import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header', () => {

    test('Should check if the path is correct when button is clicked', async () => {
        const wrapper = shallowMount(Header, {
            stubs: [
                'router-link'
            ]
        })
        const button = wrapper.find('.button-header');
        await button.trigger('click')
        expect(wrapper.vm.toPage).toBe('/meetup/meetupslogin');
    })

});