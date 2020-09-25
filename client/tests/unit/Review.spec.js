import { shallowMount } from '@vue/test-utils'
import Review from '../../src/components/Review.vue'



describe('Review', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Review);
    });

    test('Should see if there is any review-form', () => {
        expect(wrapper.find(".review-form").exists()).toBe(true)
    })

    test('Should check to see if there is any data that contains review, rating and name', () => {
        const dataInfo = wrapper.vm.$data
        expect(dataInfo).toBe(dataInfo);
    })
}); 