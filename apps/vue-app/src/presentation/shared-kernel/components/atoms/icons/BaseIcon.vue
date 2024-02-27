<template>
    <component
        :is="component"
        class="base-icon"
        :aria-label="name"
    />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{
    name: "home" | "tv";
}>();

const component = defineAsyncComponent(() => import(`../../../../../assets/icons/${props.name}.svg`));
</script>
