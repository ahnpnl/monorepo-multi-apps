import type { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideGraphQLClient } from './Infrastructure/ApiClient/provideGraphQLClient';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideGraphQLClient()],
};
