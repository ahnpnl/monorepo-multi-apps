import type { ApiClientInterface, QueryDataOptionsType } from "@/core/port/api-client/apiClientInterface.ts";

export const FetchApiAdapter: ApiClientInterface = {
    query<TData = unknown>(url: string, options?: QueryDataOptionsType): Promise<TData> {
        return fetch(url, {
            method: "GET",
            headers: options?.headers,
        }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
    },
};
