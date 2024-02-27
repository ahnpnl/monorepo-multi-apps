import type { QueryDataOptionsType } from "@/core/port/api-client/apiClientInterface.ts";
import { FetchApiAdapter } from "@/infrastructure/api-client/fetch-api/FetchAPIAdapter.ts";

describe("FetchApiAdapter", () => {
    describe("query", () => {
        it("should return data", async () => {
            const urlStub = "https://www.example.com";
            const dataStub = [1];
            const optionsStub: QueryDataOptionsType = {
                headers: {
                    Authorization: "Bearer 123",
                },
            };
            const mockedFetch = vi.fn().mockResolvedValueOnce({
                ok: true,
                json: () => Promise.resolve(dataStub),
            });
            window.fetch = mockedFetch;

            const result = await FetchApiAdapter.query(urlStub, optionsStub);

            expect(result).toEqual(dataStub);
            expect(mockedFetch).toHaveBeenCalledWith(urlStub, {
                method: "GET",
                headers: optionsStub.headers,
            });
        });
    });
});
