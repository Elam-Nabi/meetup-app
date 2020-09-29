import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {

    test('Should check if the path is correct on router link', () => {

        const wrapper = shallowMount(Header, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.findComponent(RouterLinkStub).props().to).toStrictEqual({ name: 'create' })
    })

});