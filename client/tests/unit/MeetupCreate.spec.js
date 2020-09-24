import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';
import MeetupCreate from '../../src/views/MeetupCreate.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
const router = new VueRouter()

describe('MeetupCreate', () => {

    test('Should take you to meetupsLogin page, when button is clicked', () => {
        const wrapper = shallowMount(MeetupCreate);
        wrapper.find('.button-header')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$route.path).toBe('/meetup/meetupslogin');
        });
    })

});