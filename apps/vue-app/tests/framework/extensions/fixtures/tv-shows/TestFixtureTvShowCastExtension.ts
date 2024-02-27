import { TvShowCastFixture } from "./TvShowCastFixture.ts";

import type { TvShowCastType } from "@/core/component/tv-show/domain/TvShowType.ts";

export class TestFixtureTvShowCastExtension {
    private static fixtureUnderConstruction: TvShowCastFixture[];

    static startNewFixture(): typeof TestFixtureTvShowCastExtension {
        this.fixtureUnderConstruction = [new TvShowCastFixture()];

        return this;
    }

    static withCasts(casts: TvShowCastType[]): typeof TestFixtureTvShowCastExtension {
        this.fixtureUnderConstruction = casts.map((cast) => {
            const fixture = new TvShowCastFixture();
            fixture.person = cast.person;

            return fixture;
        });

        return this;
    }

    static toJson(): TvShowCastType[] {
        return this.fixtureUnderConstruction ?? [new TvShowCastFixture()];
    }
}
