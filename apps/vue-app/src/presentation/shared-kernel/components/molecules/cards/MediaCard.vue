<template>
    <div
        class="media-card"
        :data-testid="`media-card-${media.id}`"
    >
        <a
            class="block"
            :href="media.url"
        >
            <div class="media-card__picture">
                <picture>
                    <img
                        :src="media.posterPath"
                        :alt="media.name"
                        height="270"
                        width="185"
                    >
                </picture>
            </div>
            <span v-text="media.name" />
        </a>
    </div>
</template>

<script setup lang="ts">
import type { MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";

defineProps<{
    media: MediaType;
}>();
</script>

<style scoped lang="scss">
.media-card a {
    width: 12rem;

    img {
        object-fit: cover;
        border-width: 4px;
    }
}
</style>
