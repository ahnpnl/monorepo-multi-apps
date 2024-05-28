import { inject } from '@angular/core';
import { Apollo } from 'apollo-angular';

export const useApolloAngular = () => inject(Apollo);
