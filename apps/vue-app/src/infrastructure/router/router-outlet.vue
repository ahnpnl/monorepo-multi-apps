<template>
    <component
        :is="layout"
        v-if="layout"
    >
        <router-view />
    </component>
    <router-view v-else />
</template>

<script setup lang="ts">
import { type Component, computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layout = computed<Component | undefined>(() =>
    route.meta.layout ? defineAsyncComponent(route.meta.layout) : undefined,
);
</script>
