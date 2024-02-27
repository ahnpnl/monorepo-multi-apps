import { render } from "@testing-library/vue";

import { mockRouter } from "../../../framework/test-double/router/mockVueRouter.ts";

import NavBar from "@/presentation/app-shell/NavBar.vue";

describe("NavBar", () => {
    describe("renders HTML", () => {
        it("should display home link", () => {
            const wrapper = render(NavBar, {
                global: {
                    plugins: [mockRouter],
                },
            });

            expect(wrapper.getByLabelText("home")).toBeDefined();
        });
    });
});
