import type { TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";
import type { ApiClientInterface } from "@/core/port/api-client/apiClientInterface.ts";

export interface TvShowServiceInterface {
    queryShows: (status: TvShowType["status"]) => Promise<TvShowType[]>;
}

export class TvShowService implements TvShowServiceInterface {
    private readonly apiUrl = "https://api.tvmaze.com/shows";

    constructor(private readonly apiClient: ApiClientInterface) {}

    queryShows(status: TvShowType["status"]): Promise<TvShowType[]> {
        return this.apiClient.query<TvShowType[]>(this.apiUrl).then((shows) => {
            return shows.filter((show) => show.status === status);
        });
    }
}
