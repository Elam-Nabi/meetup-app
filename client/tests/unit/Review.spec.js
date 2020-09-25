import { shallowMount } from '@vue/test-utils'
import Review from '../../src/components/Review.vue'



describe('Review', () => {

    test('Should see if there is any review-form, with data containing review, rating and name', () => {
        const wrapper = shallowMount(Review);
        expect(wrapper.find(".review-form").exists()).toBe(true)
    })

}); 