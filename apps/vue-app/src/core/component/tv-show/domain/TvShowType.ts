import type { ISODateStringType } from "../../../../../lib/js-extension/src/date-time/date.ts";

type URLType = string;

type ImageType = {
    medium: URLType;
    original: URLType;
};

type TvShowGenreType =
    | "Comedy"
    | "Drama"
    | "Family"
    | "Romance"
    | "Food"
    | "Sports"
    | "Travel"
    | "Crime"
    | "History"
    | "Fantasy"
    | "Medical"
    | "Action"
    | "Legal"
    | "Mystery"
    | "Music"
    | "Adventure"
    | "Supernatural"
    | "Science-Fiction"
    | "Thriller"
    | "War"
    | "Espionage"
    | "Western"
    | "Children"
    | "Horror"
    | "Anime";

export const TV_SHOW_STATUS = {
    ENDED: "Ended",
    TO_BE_DETERMINED: "To Be Determined",
    RUNNING: "Running",
} as const;

type TvShowStatusType = ValueOfType<typeof TV_SHOW_STATUS>;

export type TvShowType = {
    id: number;
    name: string;
    language: string;
    genres: TvShowGenreType[];
    status: TvShowStatusType;
    runtime: number;
    premiered: ISODateStringType;
    image: ImageType;
    summary: string;
};

type PersonType = {
    id: number;
    name: string;
    image: ImageType;
    url: URLType;
};

export type TvShowCastType = {
    person: PersonType;
};
