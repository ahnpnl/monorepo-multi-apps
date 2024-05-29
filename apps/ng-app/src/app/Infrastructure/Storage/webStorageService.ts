import { inject } from '@angular/core';

import { WebLocalStorageService } from './WebLocalStorageService';

export const useWebLocalStorage = () => inject(WebLocalStorageService);
