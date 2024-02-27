import type { ApiClientInterface } from "@/core/port/api-client/apiClientInterface.ts";

export const fakeApiClient: ApiClientInterface = {
    query: vi.fn(),
};
