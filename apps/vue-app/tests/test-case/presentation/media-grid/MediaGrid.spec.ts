import { render } from "@testing-library/vue";

import MediaGrid from "@/presentation/media-grid/MediaGrid.vue";
import type { MediaType } from "@/presentation/media-grid/mediaTypes.ts";

describe("MediaGrid", () => {
    describe("renders HTML", () => {
        const mediasStubs: MediaType[] = [
            {
                id: 1,
                name: "Test",
                url: "https://www.example.com",
                posterPath: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
            },
            {
                id: 2,
                name: "Test 1",
                url: "https://www.example.com",
                posterPath: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
            },
        ];

        it("should display title", () => {
            const wrapper = render(MediaGrid, {
                props: {
                    medias: mediasStubs,
                },
            });

            expect(wrapper.getByText("Trending TV shows")).toBeDefined();
        });

        it("should display media cards", () => {
            const wrapper = render(MediaGrid, {
                props: {
                    medias: mediasStubs,
                },
            });

            expect(wrapper.getAllByTestId(/media-card/i)).toHaveLength(mediasStubs.length);
        });
    });
});
