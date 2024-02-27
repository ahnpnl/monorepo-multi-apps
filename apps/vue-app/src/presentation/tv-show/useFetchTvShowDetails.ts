import { computed, ref } from "vue";

import type { MediaDetailType, MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";
import { TvShowResource } from "@/presentation/tv-show/Resources/TvShowResource.ts";
import { tvShowClientService } from "@/presentation/tv-show/tvShowClientService.ts";

export const useFetchTvShowDetails = (id: number) => {
    const loading = ref(false);
    const showDetails = ref<MediaDetailType>();
    const showCasts = ref<MediaType[]>([]);
    const tvShowResource = new TvShowResource(tvShowClientService);

    const showLoading = (): void => {
        loading.value = true;
    };
    const hideLoading = (): void => {
        loading.value = false;
    };

    showLoading();
    Promise.all([tvShowResource.getShowDetail(id), tvShowResource.getCasts(id)])
        .then(([shows, casts]) => {
            showDetails.value = shows;
            showCasts.value = casts;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(hideLoading);

    return {
        showDetails: computed(() => showDetails.value),
        showCasts: computed(() => showCasts.value),
    };
};
