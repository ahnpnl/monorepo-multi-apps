import type { TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";

export type MediaType = {
    id: TvShowType["id"];
    name: TvShowType["name"];
    url: string;
    posterPath: string;
};

export type MediaDetailType = {
    name: TvShowType["name"];
    summary: TvShowType["summary"];
    posterPath: string;
    genres: string;
    status: TvShowType["status"];
    releasedDate: TvShowType["premiered"];
    duration: TvShowType["runtime"];
    language: TvShowType["language"];
};
