import type { TvShowCastType, TvShowType } from "@/core/component/tv-show/domain/TvShowType.ts";
import type { ApiClientInterface } from "@/core/port/api-client/apiClientInterface.ts";

export interface TvShowServiceInterface {
    queryShows: (status: TvShowType["status"]) => Promise<TvShowType[]>;
    queryShowDetail: (id: TvShowType["id"]) => Promise<TvShowType>;
    queryShowCasts: (id: TvShowType["id"]) => Promise<TvShowCastType[]>;
}

export class TvShowService implements TvShowServiceInterface {
    private readonly apiUrl = "https://api.tvmaze.com/shows";

    constructor(private readonly apiClient: ApiClientInterface) {}

    queryShows(status: TvShowType["status"]): Promise<TvShowType[]> {
        return this.apiClient.query<TvShowType[]>(this.apiUrl).then((shows) => {
            return shows.filter((show) => show.status === status);
        });
    }

    queryShowDetail(id: TvShowType["id"]): Promise<TvShowType> {
        return this.apiClient.query<TvShowType>(`${this.apiUrl}/${id}`);
    }

    queryShowCasts(id: TvShowType["id"]): Promise<TvShowCastType[]> {
        return this.apiClient.query<TvShowCastType[]>(`${this.apiUrl}/${id}/cast`);
    }
}
