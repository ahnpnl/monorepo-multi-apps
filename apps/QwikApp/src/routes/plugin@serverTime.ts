import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
    return {
        date: new Date().toISOString(),
    };
});
