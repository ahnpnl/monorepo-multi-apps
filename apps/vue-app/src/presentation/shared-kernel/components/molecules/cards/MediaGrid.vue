<template>
    <section class="media-grid">
        <h1 v-text="'Trending TV shows'" />
        <div class="media-grid__grid gap-4">
            <media-card
                v-for="media of medias"
                :key="media.id"
                :media="media"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import MediaCard from "@/presentation/shared-kernel/components/molecules/cards/MediaCard.vue";
import type { MediaType } from "@/presentation/shared-kernel/components/molecules/cards/mediaTypes.ts";

defineProps<{
    medias: MediaType[];
}>();
</script>

<style scoped lang="scss">
.media-grid {
    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        padding-top: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        padding: 2rem;
    }
}
</style>
