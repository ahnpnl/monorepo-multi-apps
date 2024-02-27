<template>
    <div class="root-layout flex flex-col-reverse md-flex-row">
        <nav-bar />
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from "../presentation/app-shell/NavBar.vue";
</script>

<style scoped lang="scss">
.root-layout {
    height: 100vh;

    main {
        height: 100%;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
    }
}
</style>
