import { render } from "@testing-library/vue";

import { mockRouter } from "../../framework/test-double/router/mockVueRouter.ts";

import RootLayout from "@/routes/layout.vue";

describe("RootLayout", () => {
    describe("renders HTML", () => {
        it("should display nav bar", () => {
            const wrapper = render(RootLayout, {
                global: {
                    plugins: [mockRouter],
                },
            });

            expect(wrapper.getByLabelText("home")).toBeDefined();
        });

        it("should display main content", () => {
            const wrapper = render(RootLayout, {
                global: {
                    plugins: [mockRouter],
                },
                slots: {
                    default: `<h1>Test</h1>`,
                },
            });

            expect(wrapper.getByText("Test").tagName).toBe("H1");
        });
    });
});
