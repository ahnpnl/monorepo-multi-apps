<template>
    <div class="tv-show-details">
        <div
            v-if="showDetails"
            class="tv-show-details__information flex md-flex-row gap-10 items-center"
        >
            <img
                :src="showDetails.posterPath"
                :alt="showDetails.name"
                width="400"
                height="600"
            >
            <div class="details-information flex flex-col gap-10">
                <h2>Storyline</h2>
                <p v-text="showDetails.summary" />
                <div class="details-information__side-information grid gap-4 items-center">
                    <span v-text="'Released'" />
                    <span v-text="showDetails.releasedDate" />
                    <span v-text="'Runtime'" />
                    <span v-text="formatMinutes(showDetails.duration)" />
                    <span v-text="'Genre'" />
                    <span v-text="showDetails.genres" />
                    <span v-text="'Status'" />
                    <span v-text="showDetails.status" />
                    <span v-text="'Language'" />
                    <span v-text="showDetails.language" />
                </div>
            </div>
        </div>
        <div class="tv-show-details__cast">
            <h2 v-text="'Cast'" />
            <div class="carousel-items">
                <div class="carousel-items__item flex flex-row gap-2">
                    <media-card
                        v-for="cast of showCasts"
                        :key="cast.id"
                        :media="cast"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import MediaCard from "@/presentation/shared-kernel/components/molecules/cards/MediaCard.vue";
import { useFetchTvShowDetails } from "@/presentation/tv-show/useFetchTvShowDetails.ts";

const route = useRoute();
const routePaths = route.path.split("/");
const { showDetails, showCasts } = useFetchTvShowDetails(+routePaths[routePaths.length - 1]);

const formatMinutes = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
        return `${hours}h`;
    }
    if (hours > 0) {
        return `${hours}h${remainingMinutes}mins`;
    }

    return `${remainingMinutes}mins`;
};
</script>

<style scoped lang="scss">
.tv-show-details {
    padding: 1rem;

    h2 {
        font-size: 1.875rem;
    }

    &__information {
        img {
            object-fit: cover;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    &__cast {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}

.tv-show-details__information {
    .details-information__side-information {
        grid-template-columns: max-content 1fr;
    }
}

.carousel-items {
    overflow-y: auto;

    &__item {
        width: max-content;
    }
}
</style>
