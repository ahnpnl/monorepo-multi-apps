import type { TvShowService } from "@/core/component/tv-show/application/service/TvShowService.ts";
import { TV_SHOW_STATUS, type TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";
import type { MediaDetailType, MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";
import fallbackImg from "@assets/imgs/fallbackImg.jpg";

interface TvShowResourceInterface {
    getRunningTvShows: () => Promise<MediaType[]>;
    getShowDetail: (id: TvShowType["id"]) => Promise<MediaDetailType>;
    getCasts: (id: TvShowType["id"]) => Promise<MediaType[]>;
}

export class TvShowResource implements TvShowResourceInterface {
    constructor(private readonly tvShowService: TvShowService) {}

    getRunningTvShows(): Promise<MediaType[]> {
        return this.tvShowService.queryShows(TV_SHOW_STATUS.RUNNING).then((shows) => {
            return shows.map((show) => ({
                id: show.id,
                name: show.name,
                posterPath: show.image?.medium ?? fallbackImg,
                url: `/tv/${show.id}`,
            }));
        });
    }

    getShowDetail(id: TvShowType["id"]): Promise<MediaDetailType> {
        return this.tvShowService.queryShowDetail(id).then((show) => {
            return {
                name: show.name,
                summary: show.summary.replace(/<\/?[^>]+>/gi, " "),
                posterPath: show.image?.original ?? fallbackImg,
                genres: show.genres.join(", "),
                status: show.status,
                releasedDate: show.premiered,
                duration: show.runtime,
                language: show.language,
            };
        });
    }

    getCasts(id: TvShowType["id"]): Promise<MediaType[]> {
        return this.tvShowService.queryShowCasts(id).then((casts) => {
            return casts.map(({ person }) => {
                return {
                    id: person.id,
                    name: person.name,
                    url: person.url,
                    posterPath: person.image?.medium ?? fallbackImg,
                };
            });
        });
    }
}
