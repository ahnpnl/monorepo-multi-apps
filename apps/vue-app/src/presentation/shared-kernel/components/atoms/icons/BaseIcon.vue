<template>
    <component
        :is="component"
        class="base-icon"
        :aria-label="name"
    />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import type { IconType } from "@/presentation/shared-kernel/components/atoms/icons/iconTypes.ts";

const props = defineProps<{
    name: IconType;
}>();

const component = defineAsyncComponent(() => import(`../../../../../assets/icons/${props.name}.svg`));
</script>
