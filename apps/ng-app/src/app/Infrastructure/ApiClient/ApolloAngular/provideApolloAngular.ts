import { provideHttpClient } from '@angular/common/http';
import { type ApplicationConfig, inject } from '@angular/core';
import { type ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://api.globalticket.com/graphql'; // <-- add the URL of the GraphQL server here
const apolloOptionsFactory = (): ApolloClientOptions<unknown> => {
    const httpLink = inject(HttpLink);

    return {
        link: httpLink.create({ uri }),
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
