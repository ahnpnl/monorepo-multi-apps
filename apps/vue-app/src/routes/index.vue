<template>
    <div class="home-content flex flex-col gap-4">
        <media-grid :medias="tvShows" />
    </div>
</template>

<script setup lang="ts">
import MediaGrid from "@/presentation/shared-kernel/components/molecules/cards/MediaGrid.vue";
import { useFetchRunningShows } from "@/presentation/tv-show/useFetchRunningShows.ts";

const tvShows = useFetchRunningShows();
</script>

<style scoped lang="scss">
.home-content {
    max-height: 100vh;
    overflow-y: scroll;
}
</style>
