import { TvShowService } from "@/core/component/tv-show/application/TvShowService.ts";
import { restApiClient } from "@/infrastructure/api-client/apiClient.ts";

export const tvShowClientService = new TvShowService(restApiClient);
