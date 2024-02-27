import type { TvShowCastType } from "@/core/component/tv-show/domain/TvShowType.ts";

export class TvShowCastFixture {
    get person(): TvShowCastType["person"] {
        return this._person;
    }

    set person(value: TvShowCastType["person"]) {
        this._person = value;
    }

    private _person: TvShowCastType["person"] = {
        id: 0,
        name: "",
        url: "",
        image: {
            medium: "",
            original: "",
        },
    };

    toJson(): TvShowCastType {
        return {
            person: this.person,
        };
    }
}
