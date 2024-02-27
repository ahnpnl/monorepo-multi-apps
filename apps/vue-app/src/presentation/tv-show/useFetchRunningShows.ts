import { computed, ref } from "vue";

import type { MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";
import { TvShowResource } from "@/presentation/tv-show/Resources/TvShowResource.ts";
import { tvShowClientService } from "@/presentation/tv-show/tvShowClientService.ts";

export const useFetchRunningShows = () => {
    const tvShowResource = new TvShowResource(tvShowClientService);
    const runningTvShows = ref<MediaType[]>([]);

    tvShowResource.getRunningTvShows().then((shows) => {
        runningTvShows.value = shows;
    });

    return computed(() => runningTvShows.value);
};
