import { createEventHook } from 'js-extension/src/Hooks/createEventHook';
import { computed, type ComputedRef, onActivated, onBeforeUnmount, onDeactivated, onUnmounted, type Plugin } from 'vue';
import type {
    LocationQuery,
    NavigationGuard,
    RouteLocationPathRaw,
    RouteLocationRaw,
    RouteMeta,
    RouteParams,
    Router,
    RouteRecordRaw,
    RouterHistory,
} from 'vue-router';
import { createContextId, useContext } from '../../Context/contextApis';

interface RouterProviderInterface {
    router: Router;
    routerHistory: RouterHistory;
}

type NavigateFnType = (routeLocation: RouteLocationRaw, skipLocationChange?: boolean) => Promise<void>;
type NavigateBackFnType = () => void;
type NavigateNewTabFnType = (routeLocation: RouteLocationRaw) => void;
type AddRouteFnType = (route: RouteRecordRaw) => void;
type AddBeforeLeaveGuardFnType = (cb: NavigationGuard) => void;
type NavigationStartEventHookType = (cb: (routePath: string) => void) => void;
interface RouteLocationInterface {
    readonly path: ComputedRef<string>;
    readonly fullPath: ComputedRef<string>;
    readonly queryParams: ComputedRef<LocationQuery>;
    readonly pathParams: ComputedRef<RouteParams>;
    readonly metaData: ComputedRef<RouteMeta>;
}

const getRawRoutePath = (routeLocationRaw: RouteLocationRaw): string => {
    if (typeof routeLocationRaw === 'string') {
        return routeLocationRaw;
    }
    if ('name' in routeLocationRaw) {
        return routeLocationRaw.name?.toString() ?? '';
    }

    return (routeLocationRaw as RouteLocationPathRaw).path;
};

const navigationStartEventHook = createEventHook<Extract<RouteLocationRaw, string>>();

const NavigateContextId = createContextId<NavigateFnType>('NavigateContext');
const NavigateBackContextId = createContextId<NavigateBackFnType>('NavigateBackContext');
const NavigateNewTabContextId = createContextId<NavigateNewTabFnType>('NavigateNewTabContext');
const AddRouteContextId = createContextId<AddRouteFnType>('AddRouteContext');
const AddBeforeLeaveGuardContextId = createContextId<AddBeforeLeaveGuardFnType>('AddBeforeLeaveGuardContext');
const RouteLocationContextId = createContextId<RouteLocationInterface>('RouteLocationContext');

export const useNavigate = () => useContext(NavigateContextId);
export const useNavigateBack = () => useContext(NavigateBackContextId);
export const useNavigateNewTab = () => useContext(NavigateNewTabContextId);
export const useAddRoute = () => useContext(AddRouteContextId);
export const useAddBeforeLeaveGuard = () => useContext(AddBeforeLeaveGuardContextId);
export const useRouteLocation = () => useContext(RouteLocationContextId);
export const useOnNavigationStart: NavigationStartEventHookType = (cb) => {
    navigationStartEventHook.on(cb)
    onBeforeUnmount(() => {
        navigationStartEventHook.clear(cb);
    })
}

export const getQueryParamValue = (paramName: string, queryParams: LocationQuery): string => {
    const paramValue = queryParams[paramName];
    if (!paramValue) {
        return '';
    }

    if (typeof paramValue === 'string') {
        return paramValue;
    }

    return paramValue[0] ?? '';
};

export const getPathParamValue = (paramName: string, pathParams: RouteParams): string => {
    const paramValue = pathParams[paramName];
    if (!paramValue) {
        return '';
    }

    if (typeof paramValue === 'string') {
        return paramValue;
    }

    return paramValue[0] ?? '';
};

export const routerProvider: Plugin<RouterProviderInterface> = {
    install(app, { router, routerHistory }) {
        routerHistory.listen((to) => {
            navigationStartEventHook.trigger(to);
        });

        app.provide(RouteLocationContextId, {
            path: computed(() => router.currentRoute.value.path),
            fullPath: computed(() => router.currentRoute.value.fullPath),
            queryParams: computed(() => router.currentRoute.value.query),
            pathParams: computed(() => router.currentRoute.value.params),
            metaData: computed(() => router.currentRoute.value.meta),
        });
        app.provide(NavigateContextId, async (routeLocation, skipLocationChange = false) => {
            navigationStartEventHook.trigger(getRawRoutePath(routeLocation));
            if (skipLocationChange) {
                await router.replace(routeLocation);

                return;
            }

            await router.push(routeLocation);
        });
        app.provide(NavigateBackContextId, () => {
            router.back();
        });
        app.provide(NavigateNewTabContextId, (routeLocation) => {
            window.open(getRawRoutePath(routeLocation));
        });
        app.provide(AddRouteContextId, (route) => {
            router.addRoute(route);
        });
        app.provide(AddBeforeLeaveGuardContextId, (cb) => {
            const matchedRoutes = router.currentRoute.value.matched;
            const matchedRouteLocation = matchedRoutes[matchedRoutes.length - 1];
            const removeFromGuardList = (): void => {
                matchedRouteLocation?.leaveGuards.delete(cb);
            };
            const addToGuardList = (): void => {
                matchedRouteLocation?.leaveGuards.add(cb);
            };
            onUnmounted(removeFromGuardList);
            onDeactivated(removeFromGuardList);
            onActivated(addToGuardList);
            addToGuardList();
        });
    },
};
