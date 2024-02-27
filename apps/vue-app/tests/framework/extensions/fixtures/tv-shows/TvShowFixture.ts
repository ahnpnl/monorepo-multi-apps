import type { ISODateStringType } from "../../../../../lib/js-extension/src/date-time/date.ts";

import type { TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";

export class TvShowFixture {
    get genres(): TvShowType["genres"] {
        return this._genres;
    }

    set genres(value: TvShowType["genres"]) {
        this._genres = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get image(): TvShowType["image"] {
        return this._image;
    }

    set image(value: TvShowType["image"]) {
        this._image = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get premiered(): ISODateStringType {
        return this._premiered;
    }

    set premiered(value: ISODateStringType) {
        this._premiered = value;
    }

    get runtime(): number {
        return this._runtime;
    }

    set runtime(value: number) {
        this._runtime = value;
    }

    get status(): TvShowType["status"] {
        return this._status;
    }

    set status(value: TvShowType["status"]) {
        this._status = value;
    }

    get summary(): string {
        return this._summary;
    }

    set summary(value: string) {
        this._summary = value;
    }

    private _genres: TvShowType["genres"] = [];

    private _id: number = 0;

    private _image: TvShowType["image"] = { original: "", medium: "" };

    private _language: string = "";

    private _name: string = "";

    private _premiered: ISODateStringType = "2024-01-01";

    private _runtime: number = 0;

    private _status: TvShowType["status"] = "Running";

    private _summary: string = "";

    toJson(): TvShowType {
        return {
            id: this.id,
            name: this.name,
            genres: this.genres,
            status: this.status,
            summary: this.summary,
            image: this.image,
            language: this.language,
            runtime: this.runtime,
            premiered: this.premiered,
        };
    }
}
