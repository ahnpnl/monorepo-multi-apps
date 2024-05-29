import { Injectable } from '@angular/core';

import type { StorageServiceInterface } from '../../Core/Storage/StorageServiceInterface';

@Injectable({
    providedIn: 'root',
})
export class WebLocalStorageService implements StorageServiceInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : null;
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
