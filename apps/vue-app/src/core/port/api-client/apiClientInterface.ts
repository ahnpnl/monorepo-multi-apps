export type QueryDataOptionsType = {
    headers?: Record<string, string>;
};

export interface ApiClientInterface {
    query: <TData = unknown>(url: string, options?: QueryDataOptionsType) => Promise<TData>;
}
