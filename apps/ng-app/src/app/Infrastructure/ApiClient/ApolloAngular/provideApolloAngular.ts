import { provideHttpClient } from '@angular/common/http';
import { type ApplicationConfig, inject } from '@angular/core';
import { type ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../../../../environments/environment';
import { useWebLocalStorage } from '../../Storage/webStorageService';

const API_TOKEN_LOCAL_STORAGE_KEY = 'apiToken';

const apolloOptionsFactory = (): ApolloClientOptions<unknown> => {
    const httpLink = inject(HttpLink);
    const webLocalStorage = useWebLocalStorage();
    const auth = setContext(() => {
        const token = webLocalStorage.getItem(API_TOKEN_LOCAL_STORAGE_KEY);
        if (!token) {
            return {};
        }

        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    });
    const link = ApolloLink.from([auth, httpLink.create({ uri: environment.gqlApiUrl })]);

    return {
        link,
        cache: new InMemoryCache(),
    };
};

export const provideApolloAngular = (): ApplicationConfig['providers'] => {
    return [
        provideHttpClient(),
        Apollo,
        {
            provide: APOLLO_OPTIONS,
            useFactory: apolloOptionsFactory,
        },
    ];
};
