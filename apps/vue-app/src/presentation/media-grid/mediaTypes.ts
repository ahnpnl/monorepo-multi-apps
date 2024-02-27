import type { TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";

export type MediaType = {
    id: TvShowType["id"];
    name: TvShowType["name"];
    url: string;
    posterPath: string;
};
