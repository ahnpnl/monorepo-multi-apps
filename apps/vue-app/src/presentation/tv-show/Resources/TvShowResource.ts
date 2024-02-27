import type { TvShowService } from "@/core/component/tv-show/application/TvShowService.ts";
import { TV_SHOW_STATUS } from "@/core/component/tv-show/domain/TvShowType.ts";
import type { MediaType } from "@/presentation/media-grid/mediaTypes.ts";

interface TvShowResourceInterface {
    getRunningTvShows: () => Promise<MediaType[]>;
}

export class TvShowResource implements TvShowResourceInterface {
    constructor(private readonly tvShowService: TvShowService) {}

    getRunningTvShows(): Promise<MediaType[]> {
        return this.tvShowService.queryShows(TV_SHOW_STATUS.RUNNING).then((shows) => {
            return shows.map((show) => ({
                id: show.id,
                name: show.name,
                posterPath: show.image.medium,
                url: `/tv/${show.id}`,
            }));
        });
    }
}
