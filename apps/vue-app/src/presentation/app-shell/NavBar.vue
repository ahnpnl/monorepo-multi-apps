<template>
    <nav class="nav-bar">
        <ul class="flex justify-around gap-10 md-w-10 md-flex-col md-justify-start">
            <li class="hover-opacity-80">
                <router-link
                    :to="ROUTE_PATH.HOME"
                    :aria-label="iconName"
                >
                    <base-icon :name="iconName" />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import BaseIcon from "../shared-kernel/components/atoms/icons/BaseIcon.vue";

import type { IconType } from "@/presentation/shared-kernel/components/atoms/icons/iconTypes.ts";
import { ROUTE_PATH } from "@/routes.config.ts";

const iconName: IconType = "home";
</script>

<style scoped lang="scss">
.nav-bar {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    padding: 2rem 1.5rem;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    color: rgb(0 0 0 / var(--tw-text-opacity));

    li:hover {
        opacity: 0.8;
    }
}
</style>
