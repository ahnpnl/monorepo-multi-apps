import { render } from '@testing-library/vue';

import App from '@/App.vue';

describe('App', () => {
    it('should display', () => {
        const wrapper = render(App);

        expect(wrapper).toBeTruthy();
    });
});
