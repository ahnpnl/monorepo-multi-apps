<template>
    <h1 v-text="'Simple ' + translate('test')" />
    <h1 v-text="'Pluralization ' + translate({ key: 'car', count: 2 })" />

    <h3>Current locale {{ translationState.locale }}</h3>

    <button @click="setLocale('en-US')" v-text="'English'"></button>
    <button @click="setLocale('nl-NL')" v-text="'Nederlands'"></button>
</template>

<script setup lang="ts">
import { useSetLocale, useTranslate, useTranslationState } from './Infrastructure/Translations/VueI18n';

const translationState = useTranslationState();
const translate = useTranslate();
const setLocale = useSetLocale();
</script>

<style scoped lang="scss">

</style>
