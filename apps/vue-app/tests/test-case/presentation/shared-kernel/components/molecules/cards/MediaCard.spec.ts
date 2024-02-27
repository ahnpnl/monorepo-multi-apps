import { render } from "@testing-library/vue";

import MediaCard from "@/presentation/shared-kernel/components/molecules/cards/MediaCard.vue";
import type { MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";

describe("MediaCard", () => {
    describe("renders HTML", () => {
        const mediaStub: MediaType = {
            id: 1,
            name: "Test",
            url: "https://www.example.com",
            posterPath: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        };

        it("should display picture", () => {
            const wrapper = render(MediaCard, {
                props: {
                    media: mediaStub,
                },
            });

            expect(wrapper.getByAltText(mediaStub.name)).toBeDefined();
        });

        it("should display media name text", () => {
            const wrapper = render(MediaCard, {
                props: {
                    media: mediaStub,
                },
            });

            expect(wrapper.getByTestId(`media-card-${mediaStub.id}`).querySelector("span")?.textContent).toBe(
                mediaStub.name,
            );
        });
    });
});
