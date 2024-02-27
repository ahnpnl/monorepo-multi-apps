import { TestFixtureTvShowExtension } from "../../../../../../framework/extensions/fixtures/tv-shows/TestFixtureTvShowExtension.ts";
import { fakeApiClient } from "../../../../../../framework/infrastructure/api-client/fakeApiClient.ts";

import { TvShowService } from "@/core/component/tv-show/application/TvShowService.ts";
import { TV_SHOW_STATUS } from "@/core/component/tv-show/domain/TvShowType.ts";

describe("TvShowService", () => {
    const tvShowService = new TvShowService(fakeApiClient);

    describe("queryShows", () => {
        it("should return shows based on status", async () => {
            const fixture = TestFixtureTvShowExtension.startNewFixture();
            fixture.withShows([
                {
                    id: 1,
                    name: "Under the Dome",
                    language: "English",
                    genres: ["Drama", "Science-Fiction", "Thriller"],
                    status: "Ended",
                    runtime: 60,
                    premiered: "2013-06-24",
                    image: {
                        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                        original: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
                    },
                    summary:
                        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
                },
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
            const tvShowsStub = fixture.toJson();
            fakeApiClient.query = vi.fn().mockResolvedValueOnce(tvShowsStub);

            await expect(tvShowService.queryShows(TV_SHOW_STATUS.RUNNING)).resolves.toEqual([tvShowsStub[1]]);
        });
    });
});
