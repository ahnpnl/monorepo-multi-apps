import { render } from "@testing-library/vue";
import { flushPromises } from "@vue/test-utils";

import { TestFixtureTvShowCastExtension } from "../../../../framework/extensions/fixtures/tv-shows/TestFixtureTvShowCastExtension.ts";
import { TestFixtureTvShowExtension } from "../../../../framework/extensions/fixtures/tv-shows/TestFixtureTvShowExtension.ts";
import { mockRouter } from "../../../../framework/test-double/router/mockVueRouter.ts";

import { tvShowClientService } from "@/presentation/tv-show/tvShowClientService.ts";
import ShowDetails from "@/routes/shows/[showId]/index.vue";

describe("ShowDetails", () => {
    describe("renders HTML", () => {
        it("should display show information and cast", async () => {
            const tvShowFixture = TestFixtureTvShowExtension.startNewFixture();
            tvShowFixture.withShows([
                {
                    id: 5,
                    name: "True Detective",
                    language: "English",
                    genres: ["Drama", "Crime", "Thriller"],
                    status: "Running",
                    runtime: 60,
                    premiered: "2014-01-12",
                    image: {
                        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
                        original: "https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg",
                    },
                    summary:
                        "<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p><p><i><b>True Detective</b></i> is an American anthology crime drama television series created and written by Nic Pizzolatto. </p>",
                },
            ]);
            const tvShowDetailsStub = tvShowFixture.toJson()[0];
            const tvShowCastFixture = TestFixtureTvShowCastExtension.startNewFixture();
            tvShowCastFixture.withCasts([
                {
                    person: {
                        id: 559,
                        url: "https://www.tvmaze.com/characters/559/true-detective-maggie-hart",
                        name: "Maggie Hart",
                        image: {
                            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/62.jpg",
                            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/62.jpg",
                        },
                    },
                },
            ]);
            const tvShowCastsStub = tvShowCastFixture.toJson();
            tvShowClientService.queryShowDetail = vi.fn().mockResolvedValueOnce(tvShowDetailsStub);
            tvShowClientService.queryShowCasts = vi.fn().mockResolvedValueOnce(tvShowCastsStub);
            const wrapper = render(ShowDetails, {
                global: {
                    plugins: [mockRouter],
                },
            });
            await flushPromises();

            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});
