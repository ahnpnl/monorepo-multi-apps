import { TvShowFixture } from "./TvShowFixture.ts";

import type { TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";

export class TestFixtureTvShowExtension {
    private static fixtureUnderConstruction: TvShowFixture[];

    static startNewFixture(): typeof TestFixtureTvShowExtension {
        this.fixtureUnderConstruction = [new TvShowFixture()];

        return this;
    }

    static withShows(shows: TvShowType[]): typeof TestFixtureTvShowExtension {
        this.fixtureUnderConstruction = shows.map((show) => {
            const fixture = new TvShowFixture();
            fixture.id = show.id;
            fixture.name = show.name;
            fixture.genres = show.genres;
            fixture.image = show.image;
            fixture.language = show.language;
            fixture.premiered = show.premiered;
            fixture.runtime = show.runtime;
            fixture.summary = show.summary;
            fixture.status = show.status;

            return fixture;
        });

        return this;
    }

    static toJson(): TvShowType[] {
        return this.fixtureUnderConstruction ?? [new TvShowFixture()];
    }
}
